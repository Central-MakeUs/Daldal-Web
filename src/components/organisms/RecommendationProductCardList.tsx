import { ProductCardList } from '@components/organisms';
import { useGetRecommendedProductSimpleList } from '@hooks/apis/product';

const RecommendationProductCardList = () => {
	const { data } = useGetRecommendedProductSimpleList();

	return (
		<div className="flex flex-col gap-3">
			<span className="typography-Body1 typography-M text-White">
				오늘의 추천상품
			</span>
			<ProductCardList
				gridCols={3}
				type="heart"
				size="small"
				productList={data}
			/>
		</div>
	);
};

export default RecommendationProductCardList;
