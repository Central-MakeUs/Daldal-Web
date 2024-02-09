import { getWishListProductSimpleList } from '@apis/wishList';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetWishListProductSimpleList = () => {
	return useInfiniteQuery({
		queryKey: ['wishListProductSimpleList'],
		queryFn: ({ pageParam = 1 }) => getWishListProductSimpleList(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage?.data.isLastPage ? undefined : nextPage;
		},
	});
};
