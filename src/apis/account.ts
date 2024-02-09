import { AccountInfoResponseDTO } from '@models/account/response/accountInfoResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getAccountInfo = async (): Promise<
	ApiResponse<AccountInfoResponseDTO>
> => {
	const response = await api.get('/api/v1/members/me/account');
	return response.data;
};
