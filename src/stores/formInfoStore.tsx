import { Account } from '@models/form/entity/account';
import { create } from 'zustand';

type EnterType = 'EDIT' | 'REGISTER';

export type AccountInfoStoreType = {
	accountInfo: Account;
	setAccountInfo: (accountInfo: Account) => void;
	isSelectedBankNeeded: boolean;
	setIsSelectedBankNeeded: (isSelectedBankNeeded: boolean) => void;
	clearAccountInfo: () => void;
	enterType: 'EDIT' | 'REGISTER';
	setEnterType: (enterType: 'EDIT' | 'REGISTER') => void;
};

export const useAccountInfoStore = create<AccountInfoStoreType>(set => ({
	accountInfo: {
		USER: '',
		BANK: '',
		ACCOUNT: '',
	} as Account,
	setAccountInfo: accountInfo => set({ accountInfo }),
	isSelectedBankNeeded: false,
	setIsSelectedBankNeeded: (isSelectedBankNeeded: boolean) =>
		set({ isSelectedBankNeeded }),
	clearAccountInfo: () => set({ accountInfo: {} as Account }),
	enterType: '' as EnterType,
	setEnterType: (enterType: 'EDIT' | 'REGISTER') => set({ enterType }),
}));
