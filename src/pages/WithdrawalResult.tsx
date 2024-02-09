import { DefaultKeyValueContainer } from '@components/molecules';
import { useGetImageUploadDetailList } from '@hooks/apis/imageUpload';
import PageLayout from '@layouts/PageLayout';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';
import { useParams } from 'react-router-dom';

const WithdrawalResult = () => {
	const { resultId } = useParams();
	const { data } = useGetImageUploadDetailList(Number(resultId));

	return (
		<PageLayout className="px-6 py-5 flex flex-col gap-6" leftType="back">
			<DefaultKeyValueContainer
				title="환금 요청 일시"
				value={getDataInYYYYMMDDSplitedByDot(data.uploadTime)}
			/>
			<DefaultKeyValueContainer
				title="환금 승인 일시"
				value={getDataInYYYYMMDDSplitedByDot(data.approvedTime)}
			/>
			<DefaultKeyValueContainer
				title="환급 전 누적포인트"
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
		</PageLayout>
	);
};

export default WithdrawalResult;
