import {
	WithdrawalResultCompleted,
	WithdrawalResultInProgress,
	WithdrawalResultRejected,
} from '@components/templates';
import { useGetImageUploadDetailList } from '@hooks/apis/imageUpload';
import PageLayout from '@layouts/PageLayout';
import { useParams } from 'react-router-dom';

const WithdrawalResult = () => {
	const { resultId } = useParams();
	const { data } = useGetImageUploadDetailList(Number(resultId));

	const renderContent = () => {
		if (data.refundStatus === 'WITHDRAWN_IN_PROGRESS') {
			return <WithdrawalResultInProgress data={data} />;
		} else if (data.refundStatus === 'WITHDRAWN_COMPLETED') {
			return <WithdrawalResultCompleted data={data} />;
		} else if (data.refundStatus === 'WITHDRAWN_REJECTED') {
			return <WithdrawalResultRejected data={data} />;
		}
		return null;
	};

	return <PageLayout leftType="back">{renderContent()}</PageLayout>;
};

export default WithdrawalResult;
