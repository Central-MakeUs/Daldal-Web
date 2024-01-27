import { Button } from 'konsta/react';

import {
	AppleLoginButton,
	KakaoLoginButton,
	SpeechBubble,
} from '@components/atoms';
import { SvgIcon } from '@components/common';
import { LoginImageSlider } from '@components/molecules';
import SignUpLayout from '@layouts/SignUpLayout';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
	const navigate = useNavigate();

	const handleClickNonMembers = () => {
		navigate('/');
	};

	return (
		<SignUpLayout className="flex flex-col justify-center items-center">
			<SvgIcon id="app-logo-square" size={122} />
			<LoginImageSlider />
			<Button
				className="!typography-Body3 !typography-M !text-Gray10 mb-3 !p-0"
				clear
				onClick={handleClickNonMembers}
			>
				비회원으로 둘러보기
			</Button>
			<div className="w-full flex flex-col gap-4 mb-[21px]">
				<AppleLoginButton />
				<KakaoLoginButton />
			</div>
			<SpeechBubble text="⚡️3초만에 빠른 회원가입" />
		</SignUpLayout>
	);
};

export default SignUp;
