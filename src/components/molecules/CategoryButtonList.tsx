import ProductCategoryButton from '@components/atoms/button/ProductCategoryButton';
import { IconId } from '@type/svgIcon';

const CategoryButtonList = () => {
	const categoyList: {
		id: IconId;
		name: string;
	}[] = [
		{ id: 'category-clothes', name: '의류' },
		{ id: 'category-hat', name: '모자' },
		{ id: 'category-bags', name: '가방' },
		{ id: 'category-shoes', name: '신발' },
		{ id: 'category-jewlery', name: '쥬얼리' },
	];

	return (
		<div className="flex justify-between py-3 px-7 my-2">
			{categoyList.map((category, index) => {
				return (
					<ProductCategoryButton
						key={`CategoryButton#${index}`}
						category={category.name}
						handleCategoryButtonClick={() => {
							console.log(category.name + '카테고리로 이동');
						}}
						iconId={category.id}
					/>
				);
			})}
		</div>
	);
};

export default CategoryButtonList;
