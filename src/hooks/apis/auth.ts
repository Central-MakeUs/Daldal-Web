import { kakaoLogin, logout } from '@apis/auth';
import { TokenResponseDTO } from '@models/auth/response/tokenResponseDTO';
import { useMutation } from '@tanstack/react-query';
import { ApiResponse } from '@type/apiResponse';
import { setAccessToken, setRefreshToken } from '@utils/token';

export const useKakaoLogin = (errorCallback?: (error: Error) => void) => {
	return useMutation({
		mutationFn: () => kakaoLogin(),
		onSuccess: (data: ApiResponse<TokenResponseDTO>) => {
			setAccessToken(data.data.data.accessToken);
			setRefreshToken(data.data.data.refreshToken);
		},
		onError: errorCallback,
	});
};

export const useLogout = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: () => logout(),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
