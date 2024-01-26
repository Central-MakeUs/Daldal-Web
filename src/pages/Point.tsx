import { CaptionButton } from '@components/atoms';
import { PointHeader } from '@components/molecules';
import { CurrentPointHistory, PastPointHistory } from '@components/organisms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { useNavigate } from 'react-router-dom';

const Point = () => {
	const navigate = useNavigate();
	const handleCaptionButtonClick = () => {
		navigate('/withdrawal/pre');
	};

	const totalPoint = '10000';
	const isPointLargerThan1000 = +totalPoint >= 1000;

	return (
		<PageLayout leftType="home" className="px-6 py-3">
			<PointHeader />
			<div className="flex flex-col gap-[14px] mb-5">
				<CurrentPointHistory />
				<PastPointHistory />
			</div>
			<FixedBottomLayout childrenPadding="px-[20px]" height="h-15">
				<CaptionButton
					mainText="포인트 출금하기"
					caption="1,000원 이상부터 출금 가능"
					onClick={handleCaptionButtonClick}
					disabled={!isPointLargerThan1000}
				/>
			</FixedBottomLayout>
		</PageLayout>
	);
};

export default Point;
