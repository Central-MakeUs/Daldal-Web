import LocalStorageKey from '@constants/localStorageKey';

export const getUserName = () =>
	localStorage.getItem(LocalStorageKey.USER_NAME);
export const setUserName = (userName: string) =>
	localStorage.setItem(LocalStorageKey.USER_NAME, userName);
export const removeUserName = () =>
	localStorage.removeItem(LocalStorageKey.USER_NAME);

export const getProvider = () => localStorage.getItem(LocalStorageKey.PROVIDER);
export const setProvider = (provider: string) =>
	localStorage.setItem(LocalStorageKey.PROVIDER, provider);
export const removeProvider = () =>
	localStorage.removeItem(LocalStorageKey.PROVIDER);
