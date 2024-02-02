import { DefaultWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';

const DefaultWishList = () => {
	return (
		<>
			<DefaultWishListHeader />
			<div className="my-3">
				<ProductCardList type="heart" />
			</div>
		</>
	);
};

export default DefaultWishList;
