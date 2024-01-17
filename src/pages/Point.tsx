import CaptionButton from '@components/atoms/button/CaptionButton';
import RequestVerificationButton from '@components/atoms/button/RequestVerificationButton';
import GroupOrderTextPoint from '@components/atoms/GroupOrderTextPoint';
import PointList from '@components/molecules/groupOrder/PointList';
import PageLayout from '@components/templates/PageLayout';
import { NEXT_MONTH_POINT_LIST, THIS_MONTH_POINT_LIST } from '@mocks/pointList';
import { useBottomSheetStore } from '@stores/layerStore';

const Point = () => {
	const { openBottomSheet } = useBottomSheetStore();
	const handleCaptionButtonClick = () => {
		openBottomSheet('login');
	};

	return (
		<PageLayout leftType="logo" className="relative">
			<div className="flex justify-between items-end mb-7">
				<div className="typography-Body1 typography-R text-White">
					회원님의 누적 포인트는 <br />
					<GroupOrderTextPoint point={10000} /> 입니다.
				</div>
				<RequestVerificationButton />
			</div>
			<div className="flex flex-col gap-[14px] mb-5">
				<PointList {...THIS_MONTH_POINT_LIST} />
				<PointList {...NEXT_MONTH_POINT_LIST} />
			</div>
			<div className="sticky bottom-5 left-2/4 z-10">
				<CaptionButton
					mainText="포인트 출금하기"
					caption="1,000원 이상부터  출금 가능"
					onClick={handleCaptionButtonClick}
				/>
			</div>
		</PageLayout>
	);
};

export default Point;
