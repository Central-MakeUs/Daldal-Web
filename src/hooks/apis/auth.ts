import { deleteServiceAccount, getUserInfo, logout } from '@apis/auth';
import { LogoutRequestDTO } from '@models/auth/request/logoutRequestDTO';
import { useMutation } from '@tanstack/react-query';
import { removeServiceAccountCache } from '@utils/localStorage/removeServiceAccountCache';
import { setProvider, setUserName } from '@utils/localStorage/userInfo';

export const useLogout = (
	successCallback: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (request: LogoutRequestDTO) => logout(request),
		onSuccess: () => {
			removeServiceAccountCache();
			successCallback();
		},
		onError: errorCallback,
	});
};

export const useGetUserInfo = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: () => getUserInfo(),
		onSuccess: userInfo => {
			setUserName(userInfo.data.email);
			setProvider(userInfo.data.provider);
		},
		onError: errorCallback,
	});
};

export const useDeleteServiceAccount = (
	successCallback: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: () => deleteServiceAccount(),
		onSuccess: () => {
			removeServiceAccountCache();
			successCallback();
		},
		onError: errorCallback,
	});
};
