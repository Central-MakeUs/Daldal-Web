import { FormType } from '@type/form';
import { createContext, useContext } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';

interface FormContextInterface {
	isLoading: boolean;
	loadingHandler: (boolean: boolean) => void;
	register: UseFormRegister<FormType>;
	errors: FieldErrors;
}

export const FormContext = createContext<FormContextInterface | null>(null);

export const useFormContext = () => {
	const context = useContext(FormContext);

	if (!context) {
		throw new Error('useFormContext must be used within a FormProvider');
	}

	return context;
};
