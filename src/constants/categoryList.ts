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
	//TODO 디자인 업데이트 시 id, name 변경
	TOPS: { id: 'category-lotion', name: '로션', route: '/category/TOPS' },
	BOTTOMS: { id: 'category-base', name: '베이스', route: '/category/BOTTOMS' },
	FASHION: { id: 'category-eye', name: '아이', route: '/category/FASHION' },
	BEAUTY: { id: 'category-lip', name: '립', route: '/category/BEAUTY' },
	ETC: { id: 'category-innerBeauty', name: '이너뷰티', route: '/category/ETC' },
};

export default categoryList;
