import {
	getImageUploadDetailList,
	getImageUploadSimpleList,
	postImageUpload,
} from '@apis/imageUpload';
import {
	useInfiniteQuery,
	useMutation,
	useSuspenseQuery,
} from '@tanstack/react-query';

export const useGetImageUploadSimpleList = () => {
	return useInfiniteQuery({
		queryKey: ['imageUploadSimpleList'],
		queryFn: ({ pageParam = 1 }) => getImageUploadSimpleList(pageParam),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage?.data.isLastPage ? undefined : nextPage;
		},
	});
};

export const useGetImageUploadDetailList = (buyId: number) => {
	return useSuspenseQuery({
		queryKey: ['imageUploadDetailList'],
		queryFn: () => getImageUploadDetailList(buyId),
		select: data => data.data,
	});
};

export const usePostImageUpload = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (data: FormData) => postImageUpload(data),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
