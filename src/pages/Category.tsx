import { Preloader } from 'konsta/react';

import { SearchTextField } from '@components/atoms';
import { SvgIcon } from '@components/common';
import { ProductCardList } from '@components/organisms';
import categoryList, { CategoryName } from '@constants/categoryList';
import colors from '@constants/colors';
import { useGetProductSimpleList } from '@hooks/apis/product';
import useIntersection from '@hooks/infiniteScroll';
import PageLayout from '@layouts/PageLayout';
import { useParams } from 'react-router-dom';

type CategoryParams = {
	categoryName: CategoryName;
};

const Category = () => {
	const { categoryName = 'TOPS' } = useParams<CategoryParams>();
	const { id: iconId, name } = categoryList[categoryName];
	const { data, fetchNextPage, isFetchingNextPage } =
		useGetProductSimpleList(categoryName);
	const intersectionRef = useIntersection(fetchNextPage);

	return (
		<PageLayout leftType="back" className="px-3 relative flex flex-col">
			<SearchTextField readOnly />
			<div className="flex gap-1 mt-5 mb-3 items-center">
				<SvgIcon id={iconId} size={32} color={colors.Black} />
				<h2 className="text-White typography-Subhead">{name}</h2>
			</div>
			<div className="py-3">
				{data?.pages.map((page, index) => (
					<ProductCardList
						key={`ProductCardList#${index}`}
						productList={page.data.itemResponses}
						type="heart"
					/>
				))}
			</div>
			<div ref={intersectionRef} className="w-full h-6" />
			{isFetchingNextPage && (
				<div className="w-full h-full flex justify-center items-center">
					<Preloader className="k-color-Primary" />
				</div>
			)}
		</PageLayout>
	);
};

export default Category;
