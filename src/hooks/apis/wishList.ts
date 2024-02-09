import {
	deleteWishItem,
	getWishListProductSimpleList,
	postWishItem,
} from '@apis/wishList';
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

export const usePostWishItem = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (itemId: number) => postWishItem(itemId),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};

export const useDeleteWithItem = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (itemId: number) => deleteWishItem(itemId),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
