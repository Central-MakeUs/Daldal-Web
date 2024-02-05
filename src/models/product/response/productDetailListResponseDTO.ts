import { CategoryName } from '@constants/categoryList';

export type ProductDetailListResponseDTO = {
	id: number;
	title: string;
	detail: string;
	redirectUrl: string;
	categoryType: CategoryName;
	price: number;
	refund: number;
	thumbnailUrl: string;
	imageUrls: string[];
	videoUrls: string[];
	isDib: boolean;
};
