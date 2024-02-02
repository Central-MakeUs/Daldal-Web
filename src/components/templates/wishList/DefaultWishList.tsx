import { DefaultWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';

const DefaultWishList = () => {
	return (
		<>
			<DefaultWishListHeader />
			<div className="my-3">
				<ProductCardList type="checkbox" />
			</div>
		</>
	);
};

export default DefaultWishList;
