import { Preloader } from 'konsta/react';
import { useEffect } from 'react';

import {
	DefaultWishList,
	DefaultWishListWithNoItem,
	EditWishList,
} from '@components/templates';
import { useGetWishListProductSimpleList } from '@hooks/apis/wishList';
import useIntersection from '@hooks/infiniteScroll';
import PageLayout from '@layouts/PageLayout';
import { useWishListEditStore, useWishListStore } from '@stores/wishListStore';

const WishList = () => {
	const wishListStatus = useWishListStore(state => state.wishListStatus);
	const setWishListStatus = useWishListStore(state => state.setWishListStatus);
	const initCheckedItems = useWishListEditStore(
		state => state.initCheckedItems,
	);

	const { data, fetchNextPage, isFetchingNextPage } =
		useGetWishListProductSimpleList();
	const intersectionRef = useIntersection(fetchNextPage);

	useEffect(() => {
		setWishListStatus('default');
		initCheckedItems();
	}, []);

	const renderContent = () => {
		const firstProductList = data?.pages[0].data.itemResponses;
		const count = data?.pages[0].data.count || 0;

		if (firstProductList?.length === 0) {
			return <DefaultWishListWithNoItem />;
		}

		if (wishListStatus === 'default') {
			return <DefaultWishList productList={data} totalNumber={count} />;
		}

		return <EditWishList productList={data} />;
	};
	return (
		<PageLayout leftType="home" className="h-full flex flex-col px-3 py-3">
			{renderContent()}
			<div ref={intersectionRef} className="w-full h-6" />
			{isFetchingNextPage && (
				<div className="w-full h-full flex justify-center items-center">
					<Preloader className="k-color-Primary" />
				</div>
			)}
		</PageLayout>
	);
};

export default WishList;
