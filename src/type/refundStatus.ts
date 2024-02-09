export type RefundStatus =
	| 'IN_PROGRESS'
	| 'COMPLETED'
	| 'REJECTED'
	// | 'WITHDRAWN_IN_PROGRESS'
	| 'WITHDRAWN_COMPLETED';
// | 'WITHDRAWN_REJECTED'

export type ImageUploadDetailRefundStatus = Extract<
	RefundStatus,
	'IN_PROGRESS' | 'COMPLETED' | 'REJECTED'
>;

export type KoRefundStatus = '미승인' | '승인' | '진행중' | '출금';
