import { PointHistoryList } from '@models/point/entity/point';

export type PointHistoryResponseDTO = {
	totalPoint: number;
	buyResponses: PointHistoryList;
};
