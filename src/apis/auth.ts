import { LogoutRequestDTO } from '@models/auth/request/logoutRequestDTO';
import { userInfoResponseDTO } from '@models/auth/response/userInfoResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const logout = async (
	request: LogoutRequestDTO,
): Promise<ApiResponse<null>> => {
	const response = await api.post('/api/v1/auth/logout', request);
	return response.data;
};

export const getUserInfo = async (): Promise<
	ApiResponse<userInfoResponseDTO>
> => {
	const response = await api.get('/api/v1/auth/me');
	return response.data;
};
