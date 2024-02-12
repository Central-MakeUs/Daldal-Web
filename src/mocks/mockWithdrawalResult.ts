import { ImageUploadDetailListResponseDTO } from '@models/imageUpload/response/imageUploadDetailListResponseDTO';
import WithdrawalResultType from '@models/withdrawal/response/withdrawalResult';

export const mockWithdrawalResult: WithdrawalResultType = {
	requestDate: '2023-12-12T12:12:12:32',
	approvedDate: '2023-12-22T23:16:12:32',
	prevPoint: '3000',
	requestPoint: '1000',
	remainedPoint: '2000',
};

export const mockRealWithdrawalResult: ImageUploadDetailListResponseDTO = {
	id: 12,
	approvedTime: '2023-12-22T23:16:12:32',
	purchase: 100,
	uploadTime: '2024-02-10T06:36:15.396Z',
	pointsBeforeRefund: 3000,
	pointsAfterRefund: 2000,
	refund: '1000',
	refundStatus: 'WITHDRAWN_COMPLETED',
	rejectReason: 'rejected',
	certImageUrl: 'https://mock',
};
