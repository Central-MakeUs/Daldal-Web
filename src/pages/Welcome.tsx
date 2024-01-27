import { DefaultButton, SvgIcon } from '@components/index';
import ClearLayout from '@layouts/ClearLayout';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
	const navigate = useNavigate();

	const description = '반갑습니다!\n 달달한 쇼핑을 마음껏 누려보세요!';

	const handleClickStartShopping = () => {
		navigate('/');
	};

	return (
		<ClearLayout className="flex flex-col">
			<div className="flex flex-col gap-[9px] mt-[37px]">
				<h2 className="text-White typography-Headline">Welcome!</h2>
				<h4 className="text-Gray20 typography-Body1 typography-R whitespace-pre-line">
					{description}
				</h4>
			</div>
			<div className="flex-grow h-full flex items-center justify-center">
				<SvgIcon id="app-logo-square" size={336} />
			</div>
			<FixedBottomLayout height="h-16" childrenPadding="px-[23px]">
				<DefaultButton
					title="쇼핑 시작하기"
					color={{
						bgColor: 'Primary',
						textColor: 'White',
					}}
					size="large"
					onClick={handleClickStartShopping}
				/>
			</FixedBottomLayout>
		</ClearLayout>
	);
};

export default Welcome;
