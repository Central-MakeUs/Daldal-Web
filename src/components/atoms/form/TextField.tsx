import { Button } from 'konsta/react';
import {
	useState,
	ReactNode,
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
} from 'react';

import { DefaultButton } from '@components/atoms';
import { zodResolver } from '@hookform/resolvers/zod';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { AccountFormName } from '@models/form/entity/account';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { useBottomSheetStore } from '@stores/layerStore';
import { FormName, FormType, SchemaType } from '@type/form';
import { getOriginalPoint, getPointText } from '@utils/formatData';
import {
	useForm,
	SubmitHandler,
	FormProvider,
	useFormContext,
} from 'react-hook-form';

type FormProps = {
	children: ReactNode;
	onSubmit: SubmitHandler<FormType>;
	schema: SchemaType;
};

const Form = ({ children, onSubmit, schema }: FormProps) => {
	const methods = useForm<FormType>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const { handleSubmit } = methods;

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1">
				{children}
			</form>
		</FormProvider>
	);
};

type FormInputProps = {
	name: AccountFormName;
	type?: 'text' | 'number';
	autoFocus?: boolean;
	disabled?: boolean;
};

const FormInput = ({
	name,
	type = 'text',
	autoFocus,
	disabled,
}: FormInputProps) => {
	const { register, formState } = useFormContext();
	const { errors } = formState;
	const [isFocused, setIsFocused] = useState(false);

	const { accountInfo } = useAccountInfoStore();
	const defaultValue = accountInfo[name] || '';
	const [value, setValue] = useState(defaultValue);

	const isNumber = type === 'number';

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	return (
		<input
			className={`w-full focus-visible:outline-none	
				my-2 py-1 bg-transparent
				text-White typography-Subhead
				caret-transparent border-b-[3px]
				${errors[name] ? 'border-b-Error' : 'border-b-White'}
				${isFocused ? '' : 'border-b-transparent'}
				[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
			`}
			onFocus={handleInputFocus}
			inputMode={isNumber ? 'numeric' : 'text'}
			type={type}
			value={value}
			{...register(name, {
				onBlur: handleInputBlur,
				onChange: handleInputChange,
			})}
			autoFocus={autoFocus}
			disabled={disabled}
			autoComplete="off"
		/>
	);
};

type FormPointInputProps = {
	name: FormName;
	autoFocus?: boolean;
};

const FormPointInput = ({ name, autoFocus }: FormPointInputProps) => {
	const { register, formState } = useFormContext();
	const { errors } = formState;
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState('0 P');

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(getOriginalPoint(e.target.value));
	};

	const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Backspace') {
			if (value.length === 1) {
				setValue('0 P');
				return;
			}

			setValue(prev => prev.slice(0, prev.length - 1));
		}
	};

	return (
		<input
			className={`w-full focus-visible:outline-none	
				my-2 py-1 bg-transparent
				text-White typography-Subhead
				caret-transparent border-b-[3px]
				${errors[name] ? 'border-b-Error' : 'border-b-White'}
				${isFocused ? '' : 'border-b-transparent'}
				[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
			`}
			onFocus={handleInputFocus}
			inputMode="numeric"
			type="string"
			onKeyDown={handleInputKeyDown}
			value={getPointText(value)}
			autoFocus={autoFocus}
			{...register(name, {
				onBlur: handleInputBlur,
				onChange: handleInputChange,
			})}
			autoComplete="off"
		/>
	);
};

type FormBankButtonProps = {
	disabled?: boolean;
};

const FormBankButton = ({ disabled }: FormBankButtonProps) => {
	const { accountInfo } = useAccountInfoStore();
	const defaultValue = accountInfo['BANK'] || '';

	const { openBottomSheet } = useBottomSheetStore();
	const handleBankButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		!disabled && openBottomSheet('bank');
	};

	return (
		<Button
			className="w-full my-2 py-1 bg-transparent text-White min-h-[38px] mb-8 pl-0 active:bg-transparent"
			onClick={handleBankButtonClick}
		>
			<span className="text-left w-full typography-Subhead">
				{accountInfo['BANK'] || defaultValue}
			</span>
		</Button>
	);
};

type FormLabelProps = {
	label: string;
};

const FormLabel = ({ label }: FormLabelProps) => {
	return (
		<label className="text-Gray20 typography-Body2 typography-R">{label}</label>
	);
};

type FormHelperTextProps = {
	name: FormName;
};

const FormHelperText = ({ name }: FormHelperTextProps) => {
	const { formState } = useFormContext();
	const { errors } = formState;
	const isError = !!errors[name]?.message;

	return (
		<span
			className={`${
				isError ? 'text-Error' : 'text-transparent'
			} typography-Body2 typography-SB`}
		>
			{isError ? String(errors[name]?.message) : 'no error'}
		</span>
	);
};

type FormButtonProps = {
	title: string;
	fieldCount?: number;
	isEditing?: boolean;
};

const FormButton = ({ title, fieldCount = 1, isEditing }: FormButtonProps) => {
	const { formState } = useFormContext();
	const { errors, dirtyFields } = formState;
	const { isSelectedBankNeeded, accountInfo } = useAccountInfoStore();
	const fieldCountForValidation = isSelectedBankNeeded
		? fieldCount - 1
		: fieldCount;
	const isErrorsEmpty = Object.keys(errors).length === 0;
	const isDirty =
		isEditing || Object.keys(dirtyFields).length === fieldCountForValidation;
	const isBankSelectedOrNotNeeded =
		(isSelectedBankNeeded && !!accountInfo['BANK']) || !isSelectedBankNeeded;
	const isFormButtonDisabled =
		!isErrorsEmpty || !isDirty || !isBankSelectedOrNotNeeded;

	return (
		<FixedBottomLayout childrenPadding="px-6" height="h-15">
			<DefaultButton
				title={title}
				color={{ bgColor: 'White', textColor: 'Black' }}
				size="large"
				disabled={isFormButtonDisabled}
			/>
		</FixedBottomLayout>
	);
};

Form.Input = FormInput;
Form.Label = FormLabel;
Form.HelperText = FormHelperText;
Form.Button = FormButton;
Form.BankButton = FormBankButton;
Form.PointInput = FormPointInput;

export default Form;
