import { SearchTextField } from '@components/atoms';
import { SvgIcon } from '@components/common';
import { ProductCardList } from '@components/organisms';
import categoryList, { CategoryName } from '@constants/categoryList';
import colors from '@constants/colors';
import PageLayout from '@layouts/PageLayout';
import { useParams } from 'react-router-dom';

type CategoryParams = {
	categoryName: CategoryName;
};

const Category = () => {
	const { categoryName = 'lotion' } = useParams<CategoryParams>();
	const { id: iconId, name } = categoryList[categoryName];

	return (
		<PageLayout leftType="back" className="p-3 relative">
			<SearchTextField />
			<div className="flex gap-1 mt-5 mb-3">
				<SvgIcon id={iconId} size={32} color={colors.White} />
				<h2 className="text-White typography-Subhead">{name}</h2>
			</div>
			<div className="py-3">
				<ProductCardList type="heart" />
			</div>
		</PageLayout>
	);
};

export default Category;
