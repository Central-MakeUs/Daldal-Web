import { Point, PointHistoryList } from '@models/point/entity/point';

type MockPointHistory = {
	totalPoint: Point;
	buyResponses: PointHistoryList;
};

export const mockCurrentPointHistory: MockPointHistory = {
	totalPoint: '1000',
	buyResponses: [
		{
			refund: '1000',
			uploadTime: '2021-09-23T15:00:00.000Z',
			id: 1,
			refundStatus: 'COMPLETED',
		},
		{
			uploadTime: '2021-09-23T15:00:00.000Z',
			id: 2,
			refundStatus: 'REJECTED',
		},
		{
			refund: '1000',
			uploadTime: '2021-09-23T15:00:00.000Z',
			id: 3,
			refundStatus: 'WITHDRAWN',
		},
	],
};

export const mockPastPointHistory: MockPointHistory = {
	totalPoint: '1000',
	buyResponses: [
		{
			refund: '1000',
			uploadTime: '2021-09-23T15:00:00.000Z',
			id: 4,
			refundStatus: 'COMPLETED',
		},
		{
			uploadTime: '2021-09-23T15:00:00.000Z',
			id: 5,
			refundStatus: 'REJECTED',
		},
		{
			uploadTime: '2021-09-23T15:00:00.000Z',
			id: 6,
			refundStatus: 'IN_PROGRESS',
		},
	],
};
