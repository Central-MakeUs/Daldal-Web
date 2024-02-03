import { kakaoLogin, logout } from '@apis/auth';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useKakaoLogin = () => {
	return useQuery({
		queryKey: ['kakaoLogin'],
		queryFn: () => kakaoLogin(),
		select: data => data.data.data,
		enabled: false,
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
