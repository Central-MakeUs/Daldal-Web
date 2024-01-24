import { ListPoint } from '@components/atoms';
import { PointHistoryList } from '@models/point/entity/point';

type PointListProps = {
	pointList: PointHistoryList;
};

const PointList = ({ pointList }: PointListProps) => {
	return (
		<div className="flex flex-col gap-2">
			{pointList.map((point, index) => (
				<ListPoint key={`ListPoint#${index}`} {...point} />
			))}
		</div>
	);
};

export default PointList;
