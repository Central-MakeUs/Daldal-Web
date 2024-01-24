import { Block, Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import colors from '@constants/colors';
import { Point } from '@models/point/entity/point';
import {
	getDataInYYYYMMDDSplitedByDot,
	getPointText,
	isPointState,
} from '@utils/formatData';

type ListPointProps = {
	onClick: () => void;
} & Point;

const ListPoint = ({ date, point, onClick }: ListPointProps) => {
	const colorsByPoint: { [key: string]: string } = {
		미승인: 'text-Error',
		진행중: 'text-Secondary_B',
		point: 'text-Gray10',
	};

	const getColorByPoint = () => {
		if (!isPointState(point)) {
			return colorsByPoint.point;
		}

		return colorsByPoint[point];
	};

	return (
		<Button
			className="flex items-center rounded-[13px] !p-4 !k-color-Gray90 h-[66px]"
			onClick={onClick}
		>
			<Block className="flex items-center flex-1 gap-[10px] !m-0 !p-0">
				<SvgIcon id="point-paid" color={colors.Gray20} size={24} />
				<Block className="flex flex-col !m-0 !p-0 text-left">
					<span className="typography-Caption1 typography-SB text-Gray50">
						{getDataInYYYYMMDDSplitedByDot(date)}
					</span>
					<span
						className={`typography-Body2 typography-R ${getColorByPoint()}`}
					>
						{getPointText(point)}
					</span>
				</Block>
			</Block>
			<SvgIcon id="direction-right" color={colors.Gray20} size={24} />
		</Button>
	);
};

export default ListPoint;
