import { DefaultWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { ProductSimpleList } from '@models/product/entity/product';

type DefaultWishListProps = {
	productList: ProductSimpleList;
	totalNumber: number;
};

const DefaultWishList = ({
	productList,
	totalNumber,
}: DefaultWishListProps) => {
	return (
		<>
			<DefaultWishListHeader />
			<div className="my-3">
				<h4 className="typography-Body4 typography-R text-White">
					검색 결과 <span className="text-Primary">{totalNumber}</span> 개
				</h4>
				<ProductCardList type="default" productList={productList} />
			</div>
		</>
	);
};

export default DefaultWishList;
