import { mockProductSimpleList } from '@mocks/mockProductSimpleList';
import { SearchResult } from '@models/search/entity/search';

export const mockSearchResultData: SearchResult = {
	totalSearchCount: 24,
	searchResultList: mockProductSimpleList,
};
