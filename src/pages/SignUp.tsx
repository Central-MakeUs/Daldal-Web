import { Button } from 'konsta/react';

import { DefaultButton, SpeechBubble } from '@components/atoms';
import { SvgIcon } from '@components/common';
import { LoginImageSlider } from '@components/molecules';
import SignUpLayout from '@layouts/SignUpLayout';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();

	const handleClickNonMembers = () => {
		navigate('/');
	};

	const handleClickAppleLogin = () => {
		//TODO: 애플 로그인 연결
	};

	const handleClickKakaoLogin = () => {
		//TODO: 카카오 로그인 연결
	};

	return (
		<SignUpLayout className="flex flex-col justify-center items-center px-[23px] py-5">
			<SvgIcon id="app-logo-square" size={122} />
			<LoginImageSlider />
			<Button
				className="typography-Body3 typography-M text-Gray10 mb-3 !bg-transparent !p-0 cursor-pointer"
				onClick={handleClickNonMembers}
			>
				비회원으로 둘러보기
			</Button>
			<div className="w-full flex flex-col gap-4 mb-[21px]">
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
			</div>
			<SpeechBubble text="⚡️3초만에 빠른 회원가입" />
		</SignUpLayout>
	);
};

export default SignUp;
