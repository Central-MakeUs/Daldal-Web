import DefaultButton from './DefaultButton';

export type LoginButtonProps = {
	closeButtonSheet?: () => void;
};

const KakaoLoginButton = ({ closeButtonSheet }: LoginButtonProps) => {
	const handleClickKakaoLogin = () => {
		//TODO: 카카오 로그인 연결
		closeButtonSheet?.();
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
