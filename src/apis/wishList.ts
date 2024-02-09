import { ProductSimpleListResponseDTO } from '@models/product/response/productSimpleListResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getWishListProductSimpleList = async (
	page: number,
): Promise<ApiResponse<ProductSimpleListResponseDTO>> => {
	const params = { page };
	const resposne = await api.get(`/api/v1/dib/me`, { params });
	return resposne.data;
};
