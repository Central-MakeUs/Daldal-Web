import {
	deleteWishItem,
	getWishListProductSimpleList,
	postWishItem,
} from '@apis/wishList';
import {
	useInfiniteQuery,
	useMutation,
	useQueryClient,
} from '@tanstack/react-query';

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

export const usePostWishItem = (errorCallback?: (error: Error) => void) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (itemId: number) => postWishItem(itemId),
		onSuccess: () => {
			queryClient.removeQueries({
				queryKey: ['wishListProductSimpleList'],
			}),
				queryClient.invalidateQueries({ queryKey: ['productSimpleList'] });
			queryClient.invalidateQueries({
				queryKey: ['recommendedProductSimpleList'],
			});
		},
		onError: errorCallback,
	});
};

export const useDeleteWishItem = (errorCallback?: (error: Error) => void) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: (itemIds: number[]) => deleteWishItem(itemIds),
		onSuccess: () => {
			queryClient.removeQueries({
				queryKey: ['wishListProductSimpleList'],
			}),
				queryClient.invalidateQueries({ queryKey: ['productSimpleList'] });
			queryClient.invalidateQueries({
				queryKey: ['recommendedProductSimpleList'],
			});
		},
		onError: errorCallback,
	});
};
