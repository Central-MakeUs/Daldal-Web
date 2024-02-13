import { PointHistory } from '@models/point/entity/point';
import { ImageUploadDetailRefundStatus } from '@type/refundStatus';

type ImageUploadSimpleItem = Omit<PointHistory, 'refundStatus'> & {
	refundStatus: ImageUploadDetailRefundStatus;
	certImageUrl: string;
};

export type ImageUploadSimpleListResponseDTO = {
	isLastPage: boolean;
	buyResponses: ImageUploadSimpleItem[];
};
