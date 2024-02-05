import { getUserInfo, kakaoLogin, logout } from '@apis/auth';
import { LogoutRequestDTO } from '@models/auth/request/logoutRequestDTO';
import { TokenResponseDTO } from '@models/auth/response/tokenResponseDTO';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { ApiResponse } from '@type/apiResponse';
import {
	removeAccessToken,
	removeRefreshToken,
	setAccessToken,
	setRefreshToken,
} from '@utils/localStorage/token';
import {
	removeProvider,
	removeUserName,
	setProvider,
	setUserName,
} from '@utils/localStorage/userInfo';

export const useKakaoLogin = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: () => kakaoLogin(),
		onSuccess: async (data: ApiResponse<TokenResponseDTO>) => {
			setAccessToken(data.data.accessToken);
			setRefreshToken(data.data.refreshToken);

			const userInfoData = await getUserInfo();
			setUserName(userInfoData.data.name);
			setProvider(userInfoData.data.provider === 'KAKAO' ? '카카오톡' : '애플');
		},
		onError: errorCallback,
	});
};

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

export const useGetUserInfo = () => {
	return useSuspenseQuery({
		queryKey: ['userInfo'],
		queryFn: () => getUserInfo(),
		select: data => data.data,
	});
};
