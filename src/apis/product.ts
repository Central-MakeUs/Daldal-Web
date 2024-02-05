import { CategoryName } from '@constants/categoryList';
import { ProductSimpleListResponseDTO } from '@models/product/response/productSimpleListResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getProductSimpleList = async (
	page: number,
	itemCategoryType?: CategoryName,
): Promise<ApiResponse<ProductSimpleListResponseDTO>> => {
	const params = {
		page,
		itemCategoryType,
	};
	const response = await api.get('/api/v1/items', { params });
	return response.data;
};
