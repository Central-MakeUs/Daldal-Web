import LocalStorageKey from '@constants/localStorageKey';

export const getAccessToken = () =>
	localStorage.getItem(LocalStorageKey.ACCESS_TOKEN);
export const setAccessToken = (accessToken: string) =>
	localStorage.setItem(
		LocalStorageKey.ACCESS_TOKEN,
		JSON.stringify(accessToken),
	);
export const removeAccessToken = () =>
	localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN);

export const getRefreshToken = () =>
	localStorage.getItem(LocalStorageKey.REFRESH_TOKEN);
export const setRefreshToken = (refreshToken: string) =>
	localStorage.setItem(
		LocalStorageKey.REFRESH_TOKEN,
		JSON.stringify(refreshToken),
	);
export const removeRefreshToken = () =>
	localStorage.removeItem(LocalStorageKey.REFRESH_TOKEN);
