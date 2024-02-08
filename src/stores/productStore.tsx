import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type ProductStore = {
	redirectUrl: string;
	setRedirectUrl: (redirectUrl: string) => void;
};

export const useProductStore = create(
	persist<ProductStore>(
		set => ({
			redirectUrl: '',
			setRedirectUrl: (redirectUrl: string) => {
				set({ redirectUrl });
			},
		}),
		{
			name: 'product',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
