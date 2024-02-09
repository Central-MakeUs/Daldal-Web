import {
	DefaultWishList,
	DefaultWishListWithNoItem,
	EditWishList,
} from '@components/templates';
import { useGetWishListProductSimpleList } from '@hooks/apis/wishList';
import PageLayout from '@layouts/PageLayout';
import { useWishListStore } from '@stores/wishListStore';

const WishList = () => {
	const wishListStatus = useWishListStore(state => state.wishListStatus);

	const { data } = useGetWishListProductSimpleList();

	const renderContent = () => {
		const productList = data?.pages[0].data.itemResponses;
		if (productList && productList.length > 0) {
			if (wishListStatus === 'default') {
				return <DefaultWishList productList={productList} />;
			}
			return <EditWishList productList={productList} />;
		}
		return <DefaultWishListWithNoItem />;
	};
	return (
		<PageLayout leftType="home" className="h-full flex flex-col px-3 py-3">
			{renderContent()}
		</PageLayout>
	);
};

export default WishList;
