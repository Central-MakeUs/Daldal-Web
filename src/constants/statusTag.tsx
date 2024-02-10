import { ReactNode } from 'react';

import { ApprovedTag, NotApprovedTag, ProgressTag } from '@components/atoms';
import { RefundStatus } from '@type/refundStatus';

type StatusValueType = {
	[K in RefundStatus]: ReactNode;
};

const statusValue: StatusValueType = {
	COMPLETED: <ApprovedTag size="large" />,
	WITHDRAWN_COMPLETED: <ApprovedTag size="large" />,
	REJECTED: <NotApprovedTag size="large" />,
	WITHDRAWN_REJECTED: <NotApprovedTag size="large" />,
	IN_PROGRESS: <ProgressTag size="large" />,
	WITHDRAWN_IN_PROGRESS: <ProgressTag size="large" />,
};

export default statusValue;
