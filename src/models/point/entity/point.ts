export type Point = string;
export type RefundStatus = '진행중' | '미승인' | '승인' | '출금';

export type PointHistory = {
	refund?: Point;
	uploadTime: string;
	detailId: number;
	refundStatus: RefundStatus;
};

export type PointHistoryList = PointHistory[];
