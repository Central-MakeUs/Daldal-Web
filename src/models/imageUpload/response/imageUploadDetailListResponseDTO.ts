import { PointHistory } from '@models/point/entity/point';
import { ImageUploadDetailRefundStatus } from '@type/refundStatus';

export type ImageUploadDetailListResponseDTO = Omit<
	PointHistory,
	'refundStatus'
> & {
	refundStatus: ImageUploadDetailRefundStatus;
	rejectReason: string;
	certImageUrl: string;
};
