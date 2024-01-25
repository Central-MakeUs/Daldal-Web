import { ProductList } from '@models/product/entity/product';

export type SearchResult = {
	totalSearchCount: number;
	searchResultList: ProductList;
};
