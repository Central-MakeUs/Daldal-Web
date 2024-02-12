const koRefundStatus = {
	IN_PROGRESS: '적립 진행중',
	COMPLETED: '적립',
	REJECTED: '적립 미승인',
	WITHDRAWN_IN_PROGRESS: '출금 진행중',
	WITHDRAWN_COMPLETED: '출금',
	WITHDRAWN_REJECTED: '출금 미승인',
} as const;

export default koRefundStatus;
