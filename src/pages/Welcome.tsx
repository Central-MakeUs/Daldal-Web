import { SvgIcon } from '@components/index';
import SignUpLayout from '@layouts/SignUpLayout';

const Welcome = () => {
	const description = '반갑습니다!\n 달달한 쇼핑을 마음껏 누려보세요!';

	return (
		<SignUpLayout>
			<h2 className="text-White typography-Headline mb-[9px]">Welcome!</h2>
			<h4 className="text-Gray20 typography-Body1 typography-R whitespace-pre-line">
				{description}
			</h4>
			<SvgIcon id="app-logo-square" width={336} />
		</SignUpLayout>
	);
};

export default Welcome;
