import { RefundStatus } from '@type/refundStatus';

export type Point = string;

export type PointHistory = {
	id: number;
	refund: Point;
	uploadTime: string;
	approvedTime: string;
	pointsBeforeRefund: number;
	pointsAfterRefund: number;
	purchase: number;
	refundStatus: RefundStatus;
};

export type PointHistoryList = PointHistory[];
