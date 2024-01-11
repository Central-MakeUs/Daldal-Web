import { getPointText } from '@utils/formatData';

interface GroupOrderTextPointProps {
	point: number;
}

function GroupOrderTextPoint({ point }: GroupOrderTextPointProps) {
	return (
		<span className="text-Secondary-B typography-Headline border-b-[5px] border-Secondary-B">
			{getPointText(point)}
		</span>
	);
}

export default GroupOrderTextPoint;
