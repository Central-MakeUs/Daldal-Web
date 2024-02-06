import { CategoryName } from '@constants/categoryList';

type ProductSimpleResponse = {
	id: number;
	title: string;
	detail: string;
	redirectUrl: string;
	categoryType: CategoryName;
	price: number;
	refund: number;
	// rating: number; // 지우기로 했는데...
	thumbnailUrl: string;
	isDib: boolean;
	// TODO isLast 추가
};

export type ProductSimpleListResponseDTO = {
	isLastPage: boolean;
	itemResponses: ProductSimpleResponse[];
};
