import { ProductSimpleList } from '@models/product/entity/product';

export type SearchResult = {
	totalSearchCount: number;
	searchResultList: ProductSimpleList;
};
