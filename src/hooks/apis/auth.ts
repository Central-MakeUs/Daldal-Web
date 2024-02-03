import { kakaoLogin } from '@apis/auth';
import { useQuery } from '@tanstack/react-query';

export const useKakaoLogin = () => {
	return useQuery({
		queryKey: ['kakaoLogin'],
		queryFn: () => kakaoLogin(),
		select: data => data.data,
		enabled: false,
	});
};
