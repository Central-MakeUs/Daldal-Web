import { ProductCardList } from '@components/organisms';
import { mockProductList } from '@mocks/productList';

const RecommendationProductCardList = () => {
	// TODO: 추천상품 API 연동
	const productList = mockProductList.slice(0, 3);

	return (
		<div className="flex flex-col gap-3 my-3">
			<span className="typography-Body1 typography-M text-White">
				오늘의 추천상품
			</span>
			<ProductCardList
				gridCols={3}
				type="heart"
				size="small"
				productList={productList}
			/>
		</div>
	);
};

export default RecommendationProductCardList;
