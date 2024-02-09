import { CurrentPointResponseDTO } from '@models/point/response/currentPointResponseDTO';
import { PointHistoryResponseDTO } from '@models/point/response/pointHistoryResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getCurrentPoint = async (): Promise<
	ApiResponse<CurrentPointResponseDTO>
> => {
	const response = await api.get('/api/v1/points/me');
	return response.data;
};

export const getExpectedPoint = async (): Promise<
	ApiResponse<PointHistoryResponseDTO>
> => {
	const response = await api.get('/api/v1/points/history/expect');
	return response.data;
};

export const getCumulatedPoint = async (): Promise<
	ApiResponse<PointHistoryResponseDTO>
> => {
	const response = await api.get('/api/v1/points/history/cumulate');
	return response.data;
};

export const postPointWithdraw = async (
	refund: number,
): Promise<ApiResponse<PointHistoryResponseDTO>> => {
	const params = {
		refund,
	};
	const response = await api.post('/api/v1/points/withdraw', null, { params });
	return response.data;
};
