import {
	DefaultWishList,
	DefaultWishListWithNoItem,
	EditWishList,
} from '@components/templates';
import PageLayout from '@layouts/PageLayout';
import { mockProductSimpleList } from '@mocks/mockProductSimpleList';
import { useWishListStore } from '@stores/wishListStore';

const WishList = () => {
	const wishListStatus = useWishListStore(state => state.wishListStatus);

	const mockData = mockProductSimpleList;

	const renderContent = () => {
		if (wishListStatus === 'default') {
			if (mockData.length > 0) {
				return <DefaultWishList productList={mockData} />;
			}
			return <DefaultWishListWithNoItem />;
		}

		return <EditWishList />;
	};
	return (
		<PageLayout leftType="home" className="h-full flex flex-col px-3 py-3">
			{renderContent()}
		</PageLayout>
	);
};

export default WishList;
