import { EditWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';

const EditWishList = () => {
	return (
		<>
			<EditWishListHeader />
			<div className="my-3">
				<ProductCardList type="checkbox" />
			</div>
		</>
	);
};

export default EditWishList;
