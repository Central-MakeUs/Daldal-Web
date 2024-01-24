import { Point } from '@models/point/entity/point';
import { getPointText } from '@utils/formatData';

type HistoryTotalPointProps = {
	totalPoint: Point;
};

const HistoryTotalPoint = ({ totalPoint }: HistoryTotalPointProps) => {
	return (
		<h3 className="typography-Headline text-White self-end">
			{getPointText(totalPoint)}
		</h3>
	);
};

export default HistoryTotalPoint;
