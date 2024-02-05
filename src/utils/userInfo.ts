import LocalStorageKey from '@constants/localStorageKey';

export const getUserName = () =>
	localStorage.getItem(LocalStorageKey.USER_NAME);
export const setUserName = (userName: string) =>
	localStorage.setItem(LocalStorageKey.USER_NAME, JSON.stringify(userName));
export const removeUserName = () =>
	localStorage.removeItem(LocalStorageKey.USER_NAME);

export const getProvider = () => localStorage.getItem(LocalStorageKey.PROVIDER);
export const setProvider = (provider: string) =>
	localStorage.setItem(LocalStorageKey.PROVIDER, JSON.stringify(provider));
export const removeProvider = () =>
	localStorage.removeItem(LocalStorageKey.PROVIDER);
