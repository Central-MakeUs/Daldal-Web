import { CategoryName } from '@constants/categoryList';

export type ProductDetailListResponseDTO = {
	id: number;
	detail: string;
	redirectUrl: string;
	categoryType: CategoryName;
	price: number;
	refund: number;
	rating: number;
	thumbnailUrl: string;
	imageUrls: string[];
	videoUrls: string[];
	isDib: boolean;
};
