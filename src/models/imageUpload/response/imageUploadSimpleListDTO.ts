import { PointHistory } from '@models/point/entity/point';

export type ImageUploadSimpleListDTO = PointHistory & {
	certImageUrl: string;
};
