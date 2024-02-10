import { KeyValueContainer } from '@components/atoms';
import { DefaultKeyValueContainer } from '@components/molecules';
import statusTag from '@constants/statusTag';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';

import { WithdrawalResultProps } from './WithdrawalResultCompleted';

const WithdrawalResultRejected = ({ data }: WithdrawalResultProps) => {
	return (
		<div className="px-6 py-5 flex flex-col gap-6">
			<DefaultKeyValueContainer
				title="환금 요청 일시"
				value={getDataInYYYYMMDDSplitedByDot(data.uploadTime)}
			/>
			<DefaultKeyValueContainer
				title="환금 승인 일시"
				value={getDataInYYYYMMDDSplitedByDot(data.approvedTime)}
			/>
			<KeyValueContainer
				title="승인 여부"
				value={statusTag[data.refundStatus]}
			/>
			<DefaultKeyValueContainer
				title="보유 포인트"
				value={getPointText(String(data.pointsBeforeRefund))}
			/>
		</div>
	);
};

export default WithdrawalResultRejected;
