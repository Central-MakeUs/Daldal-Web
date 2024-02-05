import { DefaultWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { ProductSimpleList } from '@models/product/entity/product';

type DefaultWishListProps = {
	productList: ProductSimpleList;
};

const DefaultWishList = ({ productList }: DefaultWishListProps) => {
	return (
		<>
			<DefaultWishListHeader />
			<div className="my-3">
				<ProductCardList type="default" productList={productList} />
			</div>
		</>
	);
};

export default DefaultWishList;
