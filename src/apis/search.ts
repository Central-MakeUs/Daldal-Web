import { ProductSimpleListResponseDTO } from '@models/product/response/productSimpleListResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const search = async (
	page: number,
	keyword: string,
): Promise<ApiResponse<ProductSimpleListResponseDTO>> => {
	const params = {
		page,
		keyword,
	};
	const response = await api.get('/api/v1/search', { params });
	return response.data;
};
