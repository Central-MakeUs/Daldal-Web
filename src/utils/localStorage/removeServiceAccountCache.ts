import { removeAccessToken, removeRefreshToken } from './token';
import { removeProvider, removeUserName } from './userInfo';

export const removeServiceAccountCache = () => {
	removeAccessToken();
	removeRefreshToken();
	removeUserName();
	removeProvider();
};
