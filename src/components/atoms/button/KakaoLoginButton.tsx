import { useKakaoLogin } from '@hooks/apis/auth';

import DefaultButton from './DefaultButton';

const KakaoLoginButton = () => {
	const { mutate } = useKakaoLogin();

	const handleClickKakaoLogin = () => {
		mutate();
	};

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
