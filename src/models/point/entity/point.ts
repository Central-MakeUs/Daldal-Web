import { RefundStatus } from '@type/refundStatus';

export type Point = string;

export type PointHistory = {
	id: number;
	refund?: Point;
	uploadTime: string;
	refundStatus: RefundStatus;
};

export type PointHistoryList = PointHistory[];
