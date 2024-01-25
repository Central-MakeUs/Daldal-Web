import { mockImages } from '@mocks/images';
import { SearchResult } from '@models/search/entity/search';

export const mockSearchResultData: SearchResult = {
	totalSearchCount: 24,
	searchResultList: mockImages.map((image, index) => ({
		id: index + 1,
		title: `상품 ${index + 1}`,
		price: 10000,
		refund: 100,
		category: '카테고리',
		thumbnail: image,
		images: [image],
		video: '',
		url: '',
		like: false,
	})),
};
