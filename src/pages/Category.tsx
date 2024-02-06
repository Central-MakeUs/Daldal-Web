import { SearchTextField } from '@components/atoms';
import { SvgIcon } from '@components/common';
import { ProductCardList } from '@components/organisms';
import categoryList, { CategoryName } from '@constants/categoryList';
import colors from '@constants/colors';
import { useGetProductSimpleList } from '@hooks/apis/product';
import PageLayout from '@layouts/PageLayout';
import { useParams } from 'react-router-dom';

type CategoryParams = {
	categoryName: CategoryName;
};

const Category = () => {
	const { categoryName = 'lotion' } = useParams<CategoryParams>();
	const { id: iconId, name } = categoryList[categoryName];

	const { data } = useGetProductSimpleList(categoryName);

	return (
		<PageLayout leftType="back" className="px-3 relative flex flex-col">
			<SearchTextField />
			<div className="flex gap-1 mt-5 mb-3">
				<SvgIcon id={iconId} size={32} color={colors.Black} />
				<h2 className="text-White typography-Subhead">{name}</h2>
			</div>
			<div className="py-3">
				<ProductCardList
					type="heart"
					productList={data?.pages[0].data.itemResponses}
				/>
			</div>
		</PageLayout>
	);
};

export default Category;
