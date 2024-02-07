import { PointHistory } from '@models/point/entity/point';

export type PointHistoryResponseDTO = {
	totalPoint: number;
	buyResponses: PointHistory[];
};
