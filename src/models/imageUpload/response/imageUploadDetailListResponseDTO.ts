import { PointHistory } from '@models/point/entity/point';

type ImageUploadDetailItem = PointHistory & {
	rejectReason: string;
	certImageUrl: string;
};

export type ImageUploadDetailListResponseDTO = ImageUploadDetailItem[];
