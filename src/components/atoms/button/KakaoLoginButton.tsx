import DefaultButton from './DefaultButton';

type KakaoLoginButtonProps = {
	closeButtonSheet?: () => void;
};

const KakaoLoginButton = ({ closeButtonSheet }: KakaoLoginButtonProps) => {
	const handleClickKakaoLogin = () => {
		//TODO: 카카오 로그인 연결
		if (closeButtonSheet) {
			closeButtonSheet();
		}
	};

	return (
		<DefaultButton
			iconId="kakaoTalk"
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
