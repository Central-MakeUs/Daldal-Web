import {
	getImageUploadDetailList,
	getImageUploadSimpleList,
	postImageUpload,
} from '@apis/imageUpload';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const useGetImageUploadSimpleList = () => {
	return useSuspenseQuery({
		queryKey: ['imageUploadSimpleList'],
		queryFn: () => getImageUploadSimpleList(),
		select: data => data.data,
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
