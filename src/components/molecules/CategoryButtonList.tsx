import { ProductCategoryButton } from '@components/atoms';
import { IconId } from '@type/svgIcon';
import { useNavigate } from 'react-router-dom';

const CategoryButtonList = () => {
	const categoyList: {
		id: IconId;
		name: string;
		route: string;
	}[] = [
		{ id: 'category-lotion', name: '로션', route: '/category/lotion' },
		{ id: 'category-base', name: '베이스', route: '/category/base' },
		{ id: 'category-eye', name: '아이', route: '/category/eye' },
		{ id: 'category-lip', name: '립', route: '/category/lip' },
		{
			id: 'category-innerBeauty',
			name: '이너뷰티',
			route: '/category/innerBeauty',
		},
	];

	const navigate = useNavigate();
	const handleCategoryButtonClick = (route: string) => {
		navigate(route);
	};

	return (
		<div className="flex justify-between py-3 px-6 my-2 bg-Gray80">
			{categoyList.map(({ name, id, route }, index) => {
				return (
					<ProductCategoryButton
						key={`CategoryButton#${index}`}
						category={name}
						handleCategoryButtonClick={() => handleCategoryButtonClick(route)}
						iconId={id}
					/>
				);
			})}
		</div>
	);
};

export default CategoryButtonList;
