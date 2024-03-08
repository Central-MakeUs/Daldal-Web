import { KeyValueContainer } from '@components/atoms';
import { DefaultKeyValueContainer } from '@components/molecules';
import statusTag from '@constants/statusTag';
import { ImageUploadDetailListResponseDTO } from '@models/imageUpload/response/imageUploadDetailListResponseDTO';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';

export type WithdrawalResultProps = {
	data: ImageUploadDetailListResponseDTO;
};

const WithdrawalResultCompleted = ({ data }: WithdrawalResultProps) => {
	return (
		<div className="px-6 py-5 flex flex-col gap-6">
			<DefaultKeyValueContainer
				title="환급 요청 일시"
				value={getDataInYYYYMMDDSplitedByDot(data.uploadTime)}
			/>
			<DefaultKeyValueContainer
				title="환급 승인 일시"
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
			<DefaultKeyValueContainer
				title="요청 포인트"
				value={getPointText(String(data.refund))}
			/>
			<DefaultKeyValueContainer
				title="잔여 포인트"
				value={getPointText(String(data.pointsAfterRefund))}
			/>
		</div>
	);
};

export default WithdrawalResultCompleted;
