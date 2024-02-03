import { useEffect } from 'react';

import { useKakaoLogin } from '@hooks/apis/auth';
import { setAccessToken, setRefreshToken } from '@utils/token';

import DefaultButton from './DefaultButton';

const KakaoLoginButton = () => {
	const { refetch, data: tokenData } = useKakaoLogin();

	const handleClickKakaoLogin = () => {
		refetch();
	};

	useEffect(() => {
		if (tokenData) {
			setAccessToken(tokenData.accessToken);
			setRefreshToken(tokenData.refreshToken);
		}
	}, [tokenData]);

	return (
		<DefaultButton
			icon={{
				id: 'kakaoTalk',
			}}
			title="카카오톡으로 계속하기"
			color={{
				bgColor: 'Kakao',
				textColor: 'Black',
			}}
			size="large"
			onClick={handleClickKakaoLogin}
		/>
	);
};

export default KakaoLoginButton;
