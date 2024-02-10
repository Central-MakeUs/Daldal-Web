import { PointHistory } from '@models/point/entity/point';

export type ImageUploadDetailListResponseDTO = PointHistory & {
	rejectReason: string;
	certImageUrl: string;
};
