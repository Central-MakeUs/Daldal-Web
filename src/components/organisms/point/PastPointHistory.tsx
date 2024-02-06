import {
	PointHistory,
	HistoryTotalPoint,
	PointList,
	PointHistoryTitle,
} from '@components/molecules';
import { useGetCumulatedPoint } from '@hooks/apis/point';
//import { mockPastPointHistory } from '@mocks/pointList';

const PastPointHistory = () => {
	// TODO: Past Point History get api 연결
	const { data: pointList } = useGetCumulatedPoint();
	//const pointList = mockPastPointHistory;

	const title = '역대 누적 포인트';

	return (
		<PointHistory>
			<PointHistoryTitle title={title} />
			<HistoryTotalPoint totalPoint={pointList.totalPoint} />
			<PointList {...pointList} />
		</PointHistory>
	);
};

export default PastPointHistory;
