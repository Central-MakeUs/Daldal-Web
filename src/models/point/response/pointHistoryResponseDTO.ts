import { PointHistory } from '@models/point/entity/point';

export type PointHistoryResponseDTO = {
	//TODO 서버 네이밍 매핑하기
	totalPoint: number;
	pointList: PointHistory[];
};
