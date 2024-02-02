import { Point, PointHistoryList } from '@models/point/entity/point';

type MockPointHistory = {
	totalPoint: Point;
	pointList: PointHistoryList;
};

export const mockCurrentPointHistory: MockPointHistory = {
	totalPoint: '1000',
	pointList: [
		{
			refund: '1000',
			uploadTime: '2021-09-23T15:00:00.000Z',
			buyId: 1,
			refundStatus: '승인',
		},
		{
			uploadTime: '2021-09-23T15:00:00.000Z',
			buyId: 2,
			refundStatus: '미승인',
		},
		{
			refund: '1000',
			uploadTime: '2021-09-23T15:00:00.000Z',
			buyId: 3,
			refundStatus: '출금',
		},
	],
};

export const mockPastPointHistory: MockPointHistory = {
	totalPoint: '1000',
	pointList: [
		{
			refund: '1000',
			uploadTime: '2021-09-23T15:00:00.000Z',
			buyId: 4,
			refundStatus: '승인',
		},
		{
			uploadTime: '2021-09-23T15:00:00.000Z',
			buyId: 5,
			refundStatus: '미승인',
		},
		{
			uploadTime: '2021-09-23T15:00:00.000Z',
			buyId: 6,
			refundStatus: '진행중',
		},
	],
};
