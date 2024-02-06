import { CurrentPointResponseDTO } from '@models/point/response/currentPointResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getCurrentPoint = async (): Promise<
	ApiResponse<CurrentPointResponseDTO>
> => {
	const response = await api.get('/api/v1/points/me');
	return response.data;
};
