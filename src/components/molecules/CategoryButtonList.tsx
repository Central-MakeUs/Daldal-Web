import { ProductCategoryButton } from '@components/atoms';
import categoryList from '@constants/categoryList';
import { useNavigate } from 'react-router-dom';

const CategoryButtonList = () => {
	const categoyValueList = Object.values(categoryList);

	const navigate = useNavigate();
	const handleCategoryButtonClick = (route: string) => {
		navigate(route);
	};

	return (
		<div className="flex justify-between py-3 px-6 my-2 bg-Gray80">
			{categoyValueList.map(({ name, id, route }, index) => {
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
