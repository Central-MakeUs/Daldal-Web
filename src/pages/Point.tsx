import { CaptionButton } from '@components/atoms';
import { PointHeader } from '@components/molecules';
import {
	ExpectedPointHistory,
	CumulatedPointHistory,
} from '@components/organisms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const Point = () => {
	const navigate = useNavigate();
	const handleCaptionButtonClick = () => {
		navigate('/withdrawal/pre');
	};

	const queryClient = useQueryClient();
	const totalPoint = (
		queryClient.getQueryData(['currentPoint']) as { data: number }
	)?.data;
	console.log(totalPoint);
	const isPointLargerThan1000 = totalPoint && +totalPoint >= 1000;

	return (
		<PageLayout leftType="home" className="px-6 py-3">
			<PointHeader />
			<div className="flex flex-col gap-[14px] mb-5">
				<ExpectedPointHistory />
				<CumulatedPointHistory />
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
