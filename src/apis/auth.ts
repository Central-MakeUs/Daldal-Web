import { TokenResponseDTO } from '@models/auth/response/tokenResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const kakaoLogin = async (): Promise<ApiResponse<TokenResponseDTO>> => {
	const response = await api.get('/oauth2/authorization/kakao');
	return response.data;
};
