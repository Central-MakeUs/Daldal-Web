import { Button } from 'konsta/react';
import React, { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { FormName, FormType, schema } from '@type/form';
import { getOriginalPoint, getPointText } from '@utils/formatData';
import {
	useForm,
	SubmitHandler,
	FormProvider,
	useFormContext,
} from 'react-hook-form';

type FormProps = {
	children: React.ReactNode;
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

	return (
		<FormProvider {...methods}>
			<form
				onSubmit={handleSubmit(submit)}
				className="flex flex-col w-96 p-6 gap-1"
			>
				{children}
			</form>
		</FormProvider>
	);
};

type FormInputProps = {
	name: FormName;
	type?: 'text' | 'number';
};

const FormInput = ({ name, type = 'text' }: FormInputProps) => {
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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
		/>
	);
};

type FormPointInputProps = {
	name: FormName;
};

const FormPointInput = ({ name }: FormPointInputProps) => {
	const { register, formState } = useFormContext();
	const { errors } = formState;
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState('');

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(getOriginalPoint(e.target.value));
	};

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Backspace') {
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
			value={getPointText(+value)}
			{...register(name, {
				onBlur: handleInputBlur,
				onChange: handleInputChange,
				maxLength: {
					value: 5,
					message: '최대 5자리까지 입력 가능합니다.',
				},
			})}
		/>
	);
};

const FormBankButton = () => {
	const [bankName, setBankName] = useState('');
	const handleBankButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
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
	children: React.ReactNode;
};

const FormButton = ({ children }: FormButtonProps) => {
	return (
		<button
			type="submit"
			className="w-full py-2 text-white bg-blue-500 rounded-md"
		>
			{children}
		</button>
	);
};

Form.Input = FormInput;
Form.Label = FormLabel;
Form.HelperText = FormHelperText;
Form.Button = FormButton;
Form.BankButton = FormBankButton;
Form.PointInput = FormPointInput;

export default Form;
