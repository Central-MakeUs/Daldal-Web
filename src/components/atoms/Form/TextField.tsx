import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormContext, useFormContext } from '@contexts/FormContext';
import { zodResolver } from '@hookform/resolvers/zod';
import { getOriginalPoint, getPointText } from '@utils/formatData';
import { FormName, FormType, schema } from '@type/form';
import { Button } from 'konsta/react';

interface FormProps {
	children: React.ReactNode;
	onSubmit: SubmitHandler<FormType>;
}

const Form = ({ children, onSubmit }: FormProps) => {
	const [isLoading, setIsLoading] = useState(false);
	const loadingHandler = (boolean: boolean) => setIsLoading(boolean);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormType>({
		resolver: zodResolver(schema),
		mode: 'onChange',
	});

	const submit: SubmitHandler<FormType> = async data => {
		setIsLoading(true);
		try {
			await onSubmit(data);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<FormContext.Provider
			value={{ isLoading, errors, register, loadingHandler }}
		>
			<form
				onSubmit={handleSubmit(submit)}
				className="flex flex-col w-96 p-6 gap-1"
			>
				{children}
			</form>
		</FormContext.Provider>
	);
};

interface FormInputProps {
	name: FormName;
	type?: 'text' | 'number';
}

const FormInput = ({ name, type = 'text' }: FormInputProps) => {
	const { isLoading, register, errors } = useFormContext();
	const [isFocused, setIsFocused] = useState(false);
	const [value, setValue] = useState('');

	const isPointInput = name === 'POINT';
	const isNumber = type === 'number';

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(isPointInput ? getOriginalPoint(e.target.value) : e.target.value);
	};

	const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (isPointInput && e.key === 'Backspace') {
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
					`}
			disabled={isLoading}
			onFocus={handleInputFocus}
			inputMode={isNumber ? 'numeric' : 'text'}
			type={type}
			onKeyDown={handleInputKeyDown}
			value={isPointInput ? getPointText(+value) : value}
			{...register(name, {
				onBlur: handleInputBlur,
				onChange: handleInputChange,
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

interface FormLabelProps {
	label: string;
}

const FormLabel = ({ label }: FormLabelProps) => {
	return (
		<label className="text-Gray20 typography-Body2 typography-R">{label}</label>
	);
};

interface FormHelperTextProps {
	name: FormName;
}

const FormHelperText = ({ name }: FormHelperTextProps) => {
	const { errors } = useFormContext();
	const isError = () => !!errors[name]?.message;

	return (
		<span
			className={`${
				isError() ? 'text-Error' : 'text-transparent'
			} typography-Body2 typography-SB`}
		>
			{isError() ? String(errors[name]?.message) : 'no error'}
		</span>
	);
};

interface FormButtonProps {
	children: React.ReactNode;
}

const FormButton = ({ children }: FormButtonProps) => {
	const { isLoading } = useFormContext();
	return (
		<button
			type="submit"
			className="w-full py-2 text-white bg-blue-500 rounded-md"
			disabled={isLoading}
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

export default Form;
