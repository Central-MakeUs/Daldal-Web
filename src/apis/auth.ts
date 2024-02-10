import { LogoutRequestDTO } from '@models/auth/request/logoutRequestDTO';
import { UserInfoResponseDTO } from '@models/auth/response/userInfoResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const logout = async (
	request: LogoutRequestDTO,
): Promise<ApiResponse<null>> => {
	const response = await api.post('/api/v1/auth/logout', request);
	return response.data;
};

export const getUserInfo = async (): Promise<
	ApiResponse<UserInfoResponseDTO>
> => {
	const response = await api.get('/api/v1/auth/me');
	return response.data;
};

export const deleteServiceAccount = async (): Promise<
	ApiResponse<UserInfoResponseDTO>
> => {
	const response = await api.delete('/api/v1/auth/withdrawal');
	return response.data;
};
