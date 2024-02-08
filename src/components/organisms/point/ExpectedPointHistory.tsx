import {
	PointHistory,
	HistoryTotalPoint,
	PointList,
	PointHistoryTitle,
} from '@components/molecules';
import { useGetExpectedPoint } from '@hooks/apis/point';

const ExpectedPointHistory = () => {
	const { data: pointList } = useGetExpectedPoint();

	const title = '이번달 예상 누적 포인트';
	const description =
		'*환불 시 포인트 누적 불가\n*포인트는 결제 후 30일 뒤 입금 예정';

	return (
		<PointHistory>
			<PointHistoryTitle title={title} description={description} />
			<HistoryTotalPoint totalPoint={String(pointList.totalPoint)} />
			<PointList pointList={pointList.buyResponses} />
		</PointHistory>
	);
};

export default ExpectedPointHistory;
