import { Block, Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import colors from '@constants/colors';
import { PointHistory, RefundStatus } from '@models/point/entity/point';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';
import { useNavigate } from 'react-router-dom';

type ListPointProps = PointHistory;

const ListPoint = ({
	uploadTime,
	refund,
	refundStatus,
	detailId,
}: ListPointProps) => {
	const navigate = useNavigate();
	const handleNavigateToDetailPage = () => {
		if (refundStatus === '출금') {
			navigate(`/withdrawal-result/${detailId}`);
		} else {
			navigate(`/image-upload/${detailId}`);
		}
	};

	const colorsByPoint: { [key in RefundStatus]: string } = {
		미승인: 'text-Error',
		진행중: 'text-Secondary_B',
		승인: 'text-Gray20',
		출금: 'text-Gray20',
	};

	return (
		<Button
			className="flex items-center rounded-[13px] !p-4 !k-color-Gray90 h-[66px]"
			onClick={handleNavigateToDetailPage}
		>
			<Block className="flex items-center flex-1 gap-[10px] !m-0 !p-0">
				<SvgIcon id="point-paid" color={colors.Gray20} size={24} />
				<Block className="flex flex-col !m-0 !p-0 text-left">
					<span className="typography-Caption1 typography-SB text-Gray50">
						{getDataInYYYYMMDDSplitedByDot(uploadTime)}
					</span>
					<span
						className={`typography-Body2 typography-R ${colorsByPoint[refundStatus]}`}
					>
						{getPointText(refund, refundStatus)}
					</span>
				</Block>
			</Block>
			<SvgIcon id="direction-right" color={colors.Gray20} size={24} />
		</Button>
	);
};

export default ListPoint;
