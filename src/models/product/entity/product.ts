export type ProductSimple = {
	id: number;
	title: string;
	price: number;
	refund: number;
	thumbnail: string;
	like: boolean;
};

export interface ProductDetail extends ProductSimple {
	categoryType: string;
	imageUrls: string[];
	videoUrls: string[];
	redirectUrl: string;
}

export type ProductSimpleList = ProductSimple[];
export type ProductDetailList = ProductDetail[];
