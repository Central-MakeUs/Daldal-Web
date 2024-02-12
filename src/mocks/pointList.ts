import { PointHistoryList } from '@models/point/entity/point';

export const mockCurrentPointHistory: PointHistoryList = [
	{
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'IN_PROGRESS',
	},
	{
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'REJECTED',
	},
	{
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'WITHDRAWN_IN_PROGRESS',
	},
];

export const mockPastPointHistory: PointHistoryList = [
	{
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'COMPLETED',
	},
	{
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'WITHDRAWN_REJECTED',
	},
	{
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'WITHDRAWN_COMPLETED',
	},
];
