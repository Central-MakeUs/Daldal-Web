import { PointHistory } from '@models/point/entity/point';

type ImageUploadSimpleItem = PointHistory & {
	certImageUrl: string;
};

export type ImageUploadSimpleListResponseDTO = ImageUploadSimpleItem[];
