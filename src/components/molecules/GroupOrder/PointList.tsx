import ListPoint from '@components/atoms/ListPoint';
import {
	GROUP_ORDER_LIST_POINT_DESCRIPTION,
	POINT_LIST_TITLE_BY_MONTH,
	PointListTitleByMonthType,
} from '@constants/text';
import { Point } from '@models/point/entity/point';
import { getPointText } from '@utils/formatData';

interface PointListProps {
	totalPoint: number;
	pointList: Point[];
	month: PointListTitleByMonthType;
}

function PointList({ totalPoint, pointList, month }: PointListProps) {
	const descriptions = GROUP_ORDER_LIST_POINT_DESCRIPTION;
	const isThisMonth = month === 'THIS';

	return (
		<div className="flex flex-col gap-6 bg-Gray80 p-4 rounded-[13px]">
			<div className="flex flex-col gap-3">
				<span className="typography-Body2 typography-SB text-White">
					{POINT_LIST_TITLE_BY_MONTH[month]}
				</span>
				<div className="flex flex-col typography-Body4 typography-R text-Gray20">
					{isThisMonth &&
						descriptions.map((description, index) => (
							<span key={`PointListDescription#${index}`}>{description}</span>
						))}
				</div>
			</div>
			<span className="typography-Headline text-White self-end">
				{getPointText(totalPoint)}
			</span>
			<div className="flex flex-col gap-2">
				{pointList.map(({ point, date }, index) => (
					<ListPoint
						key={`ListPoint#${index}`}
						point={point}
						date={date}
						onClick={() => console.log('포인트 정보 상세보기로 이동')}
					/>
				))}
			</div>
		</div>
	);
}

export default PointList;
