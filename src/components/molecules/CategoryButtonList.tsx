import { ProductCategoryButton } from '@components/atoms';
import { IconId } from '@type/svgIcon';
import { useNavigate } from 'react-router-dom';

const CategoryButtonList = () => {
	const categoyList: {
		id: IconId;
		name: string;
		route: string;
	}[] = [
		{ id: 'category-clothes', name: '의류', route: '/category/clothes' },
		{ id: 'category-hat', name: '모자', route: '/category/hat' },
		{ id: 'category-bags', name: '가방', route: '/category/bags' },
		{ id: 'category-shoes', name: '신발', route: '/category/shoes' },
		{ id: 'category-jewlery', name: '쥬얼리', route: '/category/jewlery' },
	];

	const navigate = useNavigate();
	const handleCategoryButtonClick = (route: string) => {
		navigate(route);
	};

	return (
		<div className="flex justify-between py-3 px-7 my-2">
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
