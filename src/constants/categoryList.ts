import { IconId } from '@type/svgIcon';

export type CategoryName = 'TOPS' | 'BOTTOMS' | 'FASHION' | 'BEAUTY' | 'ETC';

type CategoryList = {
	[K in CategoryName]: {
		id: IconId;
		name: string;
		route: string;
	};
};

const categoryList: CategoryList = {
	TOPS: { id: 'category-clothes', name: '상의', route: '/category/TOPS' },
	BOTTOMS: { id: 'category-bottoms', name: '하의', route: '/category/BOTTOMS' },
	FASHION: {
		id: 'category-fashion',
		name: '패션잡화',
		route: '/category/FASHION',
	},
	BEAUTY: { id: 'category-base', name: '뷰티', route: '/category/BEAUTY' },
	ETC: { id: 'category-etc', name: '기타', route: '/category/ETC' },
};

export default categoryList;
