import { Block, Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import colors from '@constants/colors';
import koRefundStatus from '@constants/koRefundStatus';
import { PointHistory } from '@models/point/entity/point';
import { KoRefundStatus } from '@type/refundStatus';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';
import { useNavigate } from 'react-router-dom';

type ListPointProps = PointHistory;

const ListPoint = ({
	uploadTime,
	refund,
	refundStatus,
	id,
}: ListPointProps) => {
	const navigate = useNavigate();

	const convertedRefundStatus = koRefundStatus[refundStatus];
	const handleNavigateToDetailPage = () => {
		if (
			['출금 진행중', '출금 승인', '출금 미승인'].includes(
				convertedRefundStatus,
			)
		) {
			navigate(`/withdrawal-result/${id}`);
		} else {
			navigate(`/image-upload/${id}`);
		}
	};

	const colorsByPoint: { [key in KoRefundStatus]: string } = {
		'적립 미승인': 'text-Error',
		'적립 진행중': 'text-Secondary_B',
		적립: 'text-Gray20',
		'출금 미승인': 'text-Error',
		'출금 진행중': 'text-Secondary_B',
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
						className={`typography-Body2 typography-R ${colorsByPoint[convertedRefundStatus]}`}
					>
						{getPointText(refund, convertedRefundStatus)}
					</span>
				</Block>
			</Block>
			<SvgIcon id="direction-right" color={colors.Gray20} size={24} />
		</Button>
	);
};

export default ListPoint;
