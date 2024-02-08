import { ImageUploadSimpleListDTO } from '@models/imageUpload/response/ImageUploadSimpleListDTO';
import { ApiResponse } from '@type/apiResponse';

import { api } from '.';

export const getImageUploadSimpleList = async (): Promise<
	ApiResponse<ImageUploadSimpleListDTO>
> => {
	const response = await api.get('/api/v1/buys/me');
	return response.data;
};
