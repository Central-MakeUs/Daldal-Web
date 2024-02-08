import { getUserInfo, logout } from '@apis/auth';
import { LogoutRequestDTO } from '@models/auth/request/logoutRequestDTO';
import { useMutation } from '@tanstack/react-query';
import {
	removeAccessToken,
	removeRefreshToken,
} from '@utils/localStorage/token';
import {
	removeProvider,
	removeUserName,
	setProvider,
	setUserName,
} from '@utils/localStorage/userInfo';

export const useLogout = (
	successCallback: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (request: LogoutRequestDTO) => logout(request),
		onSuccess: () => {
			removeAccessToken();
			removeRefreshToken();
			removeUserName();
			removeProvider();

			successCallback();
		},
		onError: errorCallback,
	});
};

export const useGetUserInfo = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: () => getUserInfo(),
		onSuccess: userInfo => {
			setUserName(userInfo.data.name);
			setProvider(userInfo.data.provider);
		},
		onError: errorCallback,
	});
};
