import { AccountInfoResponseDTO } from '@models/account/response/accountInfoResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getAccountInfo = async (): Promise<
	ApiResponse<AccountInfoResponseDTO>
> => {
	const response = await api.get('/api/v1/members/me/account');
	return response.data;
};

export const patchAccountInfo = async (): Promise<ApiResponse<null>> => {
	const response = await api.patch('/api/v1/members/me/account');
	return response.data;
};
