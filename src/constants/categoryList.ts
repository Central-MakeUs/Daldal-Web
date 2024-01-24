import { IconId } from '@type/svgIcon';

export type CategoryName = 'lotion' | 'base' | 'eye' | 'lip' | 'innerBeauty';

type CategoryList = {
	[K in CategoryName]: {
		id: IconId;
		name: string;
	};
};

const categoryList: CategoryList = {
	lotion: { id: 'category-lotion', name: '로션' },
	base: { id: 'category-base', name: '베이스' },
	eye: { id: 'category-eye', name: '아이' },
	lip: { id: 'category-lip', name: '립' },
	innerBeauty: { id: 'category-innerBeauty', name: '이너뷰티' },
};

export default categoryList;
