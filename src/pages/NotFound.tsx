import { DefaultButton, SvgIcon } from '@components/index';
import ClearLayout from '@layouts/ClearLayout';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	const navigate = useNavigate();
	const handleClickHome = () => {
		navigate('/');
	};

	const message = {
		title: '앗, 여기는 달달한 상품이 \n 없는 것 같아요 🥲',
		description:
			'죄송합니다. 해당 페이지를 찾을 수 없습니다.\n홈페이지로 이동해 다시 쇼핑을 즐겨보세요.',
	};

	return (
		<ClearLayout className="px-[25px] py-[24px]">
			<div className="flex flex-col gap-3">
				<SvgIcon id="404" width={135} height={72} />
				<h2 className="typography-Subhead text-White whitespace-pre-line">
					{message.title}
				</h2>
				<h4 className="typography-Body2 typography-R text-Gray20 whitespace-pre-line">
					{message.description}
				</h4>
			</div>
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<DefaultButton
					title="달달쇼핑 홈으로 가기"
					color={{ bgColor: 'White', textColor: 'Black' }}
					size="large"
					onClick={handleClickHome}
				/>
			</FixedBottomLayout>
		</ClearLayout>
	);
};

export default NotFound;
