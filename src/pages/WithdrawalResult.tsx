import { DefaultKeyValueContainer } from '@components/index';
import PageLayout from '@layouts/PageLayout';
import mockWithdrawalResult from '@mocks/mockWithdrawalResult';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';

const WithdrawalResult = () => {
	return (
		<PageLayout className="px-6 py-5 flex flex-col gap-6" leftType="back">
			<DefaultKeyValueContainer
				title="환금 요청 일시"
				value={getDataInYYYYMMDDSplitedByDot(mockWithdrawalResult.requestDate)}
			/>
			<DefaultKeyValueContainer
				title="환금 승인 일시"
				value={getDataInYYYYMMDDSplitedByDot(mockWithdrawalResult.approvedDate)}
			/>
			<DefaultKeyValueContainer
				title="환급 전 누적포인트"
				value={getPointText(mockWithdrawalResult.prevPoint)}
			/>
			<DefaultKeyValueContainer
				title="요청 포인트"
				value={getPointText(mockWithdrawalResult.requestPoint)}
			/>
			<DefaultKeyValueContainer
				title="잔여 포인트"
				value={getPointText(mockWithdrawalResult.remainedPoint)}
			/>
		</PageLayout>
	);
};

export default WithdrawalResult;
