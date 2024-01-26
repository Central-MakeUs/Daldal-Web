import DefaultButton from './DefaultButton';
import { LoginButtonProps } from './KakaoLoginButton';

const AppleLoginButton = ({ closeButtonSheet }: LoginButtonProps) => {
	const handleClickAppleLogin = () => {
		//TODO: 애플 로그인 연결
		closeButtonSheet?.();
	};

	return (
		<DefaultButton
			iconId="baseline-apple"
			iconColor="Black"
			title="애플 아이디로 계속하기"
			color={{
				bgColor: 'White',
				textColor: 'Black',
				borderColor: 'Gray20',
			}}
			size="large"
			onClick={handleClickAppleLogin}
		/>
	);
};

export default AppleLoginButton;
