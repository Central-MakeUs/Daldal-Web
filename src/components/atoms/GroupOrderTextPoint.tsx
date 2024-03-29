import { Point } from '@models/point/entity/point';
import { getPointText } from '@utils/formatData';

type GroupOrderTextPointProps = {
	point: Point;
};

const GroupOrderTextPoint = ({ point }: GroupOrderTextPointProps) => {
	return (
		<span className="text-Secondary_B typography-Headline border-b-[5px] border-Secondary_B w-fit">
			{getPointText(point)}
		</span>
	);
};

export default GroupOrderTextPoint;
