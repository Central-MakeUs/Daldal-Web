const koRefundStatus = {
	IN_PROGRESS: '진행중',
	COMPLETED: '승인',
	REJECTED: '미승인',
	WITHDRAWN: '출금',
} as const;

export default koRefundStatus;
