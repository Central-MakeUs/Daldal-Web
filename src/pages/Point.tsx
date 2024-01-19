import CaptionButton from '@components/atoms/button/CaptionButton';
import RequestVerificationButton from '@components/atoms/button/RequestVerificationButton';
import GroupOrderTextPoint from '@components/atoms/GroupOrderTextPoint';
import PointList from '@components/molecules/groupOrder/PointList';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { NEXT_MONTH_POINT_LIST, THIS_MONTH_POINT_LIST } from '@mocks/pointList';
import { useNavigate } from 'react-router-dom';

const Point = () => {
	const navigate = useNavigate();
	const handleCaptionButtonClick = () => {
		navigate('/withdrawal/pre');
	};

	// TODO: totalPoint API 연동
	const totalPoint = '10000';

	const isPointLargerThan1000 = +totalPoint >= 1000;

	return (
		<PageLayout leftType="logo" className="p-6">
			<div className="flex justify-between items-end mb-7">
				<div className="typography-Body1 typography-R text-White">
					회원님의 누적 포인트는 <br />
					<GroupOrderTextPoint point={totalPoint} /> 입니다.
				</div>
				<RequestVerificationButton />
			</div>
			<div className="flex flex-col gap-[14px] mb-5">
				<PointList {...THIS_MONTH_POINT_LIST} />
				<PointList {...NEXT_MONTH_POINT_LIST} />
			</div>
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<CaptionButton
					mainText="포인트 출금하기"
					caption="1,000원 이상부터  출금 가능"
					onClick={handleCaptionButtonClick}
					disabled={!isPointLargerThan1000}
				/>
			</FixedBottomLayout>
		</PageLayout>
	);
};

export default Point;
