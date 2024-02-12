import koRefundStatus from '@constants/koRefundStatus';

export type RefundStatus =
	| 'IN_PROGRESS'
	| 'COMPLETED'
	| 'REJECTED'
	| 'WITHDRAWN_IN_PROGRESS'
	| 'WITHDRAWN_COMPLETED'
	| 'WITHDRAWN_REJECTED';

export type ImageUploadDetailRefundStatus = Extract<
	RefundStatus,
	'IN_PROGRESS' | 'COMPLETED' | 'REJECTED'
>;

export type WithdrawalResultRefundStatus = Extract<
	RefundStatus,
	'WITHDRAWN_IN_PROGRESS' | 'WITHDRAWN_COMPLETED' | 'WITHDRAWN_REJECTED'
>;

export type KoRefundStatus =
	(typeof koRefundStatus)[keyof typeof koRefundStatus];
