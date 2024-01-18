import { Button } from 'konsta/react';
import {
	useState,
	ReactNode,
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
} from 'react';

import DefaultButton from '@components/atoms/button/DefaultButton';
import { zodResolver } from '@hookform/resolvers/zod';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { FormName, FormType, schema } from '@type/form';
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
};

const Form = ({ children, onSubmit }: FormProps) => {
	const methods = useForm<FormType>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const { handleSubmit } = methods;

	const submit: SubmitHandler<FormType> = async data => {
		await onSubmit(data);
	};

	const handleFormSubmit = () => {
		handleSubmit(submit);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={handleFormSubmit} className="flex flex-col gap-1">
				{children}
			</form>
		</FormProvider>
	);
};

type FormInputProps = {
	name: FormName;
	type?: 'text' | 'number';
	autoFocus?: boolean;
};

const FormInput = ({ name, type = 'text', autoFocus }: FormInputProps) => {
	const { register, formState } = useFormContext();
	const { errors } = formState;
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState('');

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
	const [value, setValue] = useState('P');

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
				setValue('P');
				return;
			}

			setValue(value.slice(0, -1));
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
		/>
	);
};

const FormBankButton = () => {
	const [bankName, setBankName] = useState('');
	const handleBankButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		setBankName('신한은행');
	};

	return (
		<Button
			className="w-full my-2 py-1 bg-transparent text-White min-h-[38px] mb-8 pl-0"
			onClick={handleBankButtonClick}
		>
			<span className="text-left w-full typography-Subhead">{bankName}</span>
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
};

const FormButton = ({ title }: FormButtonProps) => {
	const { formState } = useFormContext();
	const { errors } = formState;
	const isErrorsEmpty = Object.keys(errors).length === 0;

	return (
		<FixedBottomLayout childrenPadding="px-6" height="h-15">
			<DefaultButton
				title={title}
				color={{ bgColor: 'White', textColor: 'Black' }}
				size="large"
				disabled={!isErrorsEmpty}
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
