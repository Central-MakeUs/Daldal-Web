import { createContext, useContext } from 'react';
import { FieldValues, UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormContextInterface {
	isLoading: boolean;
	loadingHandler: (boolean: boolean) => void;
	register: UseFormRegister<FieldValues>;
	errors: FieldErrors;
}

export const FormContext = createContext<FormContextInterface | undefined>(
	undefined,
);

export const useFormContext = () => {
	const context = useContext(FormContext);

	if (!context) {
		throw new Error('useFormContext must be used within a FormProvider');
	}

	return context;
};
