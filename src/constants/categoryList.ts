import { IconId } from '@type/svgIcon';

export type CategoryName = 'clothes' | 'hat' | 'bags' | 'shoes' | 'jewlery';

type CategoryList = {
	[K in CategoryName]: {
		id: IconId;
		name: string;
	};
};

const categoryList: CategoryList = {
	clothes: { id: 'category-clothes', name: '의류' },
	hat: { id: 'category-hat', name: '모자' },
	bags: { id: 'category-bags', name: '가방' },
	shoes: { id: 'category-shoes', name: '신발' },
	jewlery: { id: 'category-jewlery', name: '쥬얼리' },
};

export default categoryList;
