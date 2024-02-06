import { ProductDetailListResponseDTO } from '@models/product/response/productDetailListResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getCurrentPoint = async (): Promise<
	ApiResponse<ProductDetailListResponseDTO>
> => {
	const response = await api.get('/api/v1/points/me');
	return response.data;
};
