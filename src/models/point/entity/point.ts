export type Point = string;
export type MockRefundStatus = '진행중' | '미승인' | '승인' | '출금';

export type PointHistory = {
	refund?: Point;
	uploadTime: string;
	buyId: number;
	refundStatus: MockRefundStatus;
};

export type PointHistoryList = PointHistory[];
