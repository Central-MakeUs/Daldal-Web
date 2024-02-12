import { ImageUploadDetailListResponseDTO } from '@models/imageUpload/response/imageUploadDetailListResponseDTO';
import { ImageUploadSimpleListResponseDTO } from '@models/imageUpload/response/imageUploadSimpleListResponseDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getImageUploadSimpleList = async (): Promise<
	ApiResponse<ImageUploadSimpleListResponseDTO>
> => {
	const response = await api.get('/api/v1/buys/me');
	return response.data;
};

export const getImageUploadDetailList = async (
	buyId: number,
): Promise<ApiResponse<ImageUploadDetailListResponseDTO>> => {
	const response = await api.get(`/api/v1/buys/${buyId}`);
	return response.data;
};

export const postImageUpload = async (
	data: FormData,
): Promise<ApiResponse<ImageUploadDetailListResponseDTO>> => {
	const response = await api.post('/api/v1/buys', data, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return response.data;
};
