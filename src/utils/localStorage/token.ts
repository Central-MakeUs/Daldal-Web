import { api } from '@apis/index';
import LocalStorageKey from '@constants/localStorageKey';
import { removeServiceAccountCache } from '@utils/localStorage/removeServiceAccountCache';

export const getAccessToken = () =>
	localStorage.getItem(LocalStorageKey.ACCESS_TOKEN);
export const setAccessToken = (accessToken: string) =>
	localStorage.setItem(LocalStorageKey.ACCESS_TOKEN, accessToken);
export const removeAccessToken = () =>
	localStorage.removeItem(LocalStorageKey.ACCESS_TOKEN);

export const getRefreshToken = () =>
	localStorage.getItem(LocalStorageKey.REFRESH_TOKEN);
export const setRefreshToken = (refreshToken: string) =>
	localStorage.setItem(LocalStorageKey.REFRESH_TOKEN, refreshToken);
export const removeRefreshToken = () =>
	localStorage.removeItem(LocalStorageKey.REFRESH_TOKEN);

const parseJwt = (token: string) => {
	return JSON.parse(atob(token.split('.')[1]));
};

export const verifyToken = (token: string) => {
	const parsedToken = parseJwt(token);
	const exp = parsedToken.exp;
	const now = new Date().getTime() / 1000;
	return now < exp;
};

export const verifyAccessToken = () => {
	const accessToken = getAccessToken();
	if (accessToken) {
		return verifyToken(accessToken);
	}

	return false;
};

export const verifyRefreshToken = () => {
	const refreshToken = getRefreshToken();
	if (refreshToken) {
		return verifyToken(refreshToken);
	}

	return false;
};

export const renewAccessToken = async () => {
	const { data } = await api.post('/api/v1/auth/refresh-access-token', {
		refreshToken: getRefreshToken(),
	});

	const newAccessToken = data.data.accessToken;
	const newRefreshToken = data.data.refreshToken;

	setAccessToken(newAccessToken);
	setRefreshToken(newRefreshToken);

	return newAccessToken;
};

export const renewRefreshToken = () => {
	removeServiceAccountCache();
	window.location.href = '/sign-up';
};
