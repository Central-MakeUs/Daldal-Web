import DefaultButton from './DefaultButton';

const KakaoLoginButton = () => {
	const handleClickKakaoLogin = () => {
		window.location.href = `${
			import.meta.env.VITE_BASE_URL
		}/oauth2/authorization/kakao`;
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
