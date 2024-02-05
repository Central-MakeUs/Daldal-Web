import { ProductCardList } from '@components/organisms';
import { useGetProductSimpleList } from '@hooks/apis/product';
//import { mockProductSimpleList } from '@mocks/mockProductSimpleList';

const RecommendationProductCardList = () => {
	// TODO: 추천상품 API 연동
	const { data } = useGetProductSimpleList();

	//const productList = mockProductSimpleList.slice(0, 3);

	return (
		<div className="flex flex-col gap-3">
			<span className="typography-Body1 typography-M text-White">
				오늘의 추천상품
			</span>
			<ProductCardList
				gridCols={3}
				type="heart"
				size="small"
				productList={data?.pages[0].data}
			/>
		</div>
	);
};

export default RecommendationProductCardList;
