import DefaultButton from './DefaultButton';

const AppleLoginButton = () => {
	const handleClickAppleLogin = () => {
		//TODO: 애플 로그인 연결
	};

	return (
		<DefaultButton
			icon={{
				id: 'baseline-apple',
				color: 'Black',
			}}
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
