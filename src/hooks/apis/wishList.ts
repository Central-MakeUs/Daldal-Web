import { getWishListProductSimpleList, postWishList } from '@apis/wishList';
import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

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

export const usePostWithList = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (itemId: number) => postWishList(itemId),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
