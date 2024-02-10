import { CategoryName } from '@constants/categoryList';

export type ProductSimpleResponse = {
	id: number;
	title: string;
	redirectUrl: string;
	categoryType: CategoryName;
	price: number;
	refund: number;
	thumbnailUrl: string;
	isDib: boolean;
};

export type ProductSimpleListResponseDTO = {
	isLastPage: boolean;
	count: number;
	itemResponses: ProductSimpleResponse[];
};
