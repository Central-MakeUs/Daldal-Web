import {
	PointHistory,
	HistoryTotalPoint,
	PointList,
	PointHistoryTitle,
} from '@components/molecules';
import { useGetCumulatedPoint } from '@hooks/apis/point';

const CumulatedPointHistory = () => {
	const { data: pointList } = useGetCumulatedPoint();

	const title = '역대 누적 포인트';

	return (
		<PointHistory>
			<PointHistoryTitle title={title} />
			<HistoryTotalPoint totalPoint={String(pointList.totalPoint)} />
			<PointList pointList={pointList.buyResponses} />
		</PointHistory>
	);
};

export default CumulatedPointHistory;
