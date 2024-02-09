import {
	getImageUploadDetailList,
	getImageUploadSimpleList,
} from '@apis/imageUpload';
import { useSuspenseQuery } from '@tanstack/react-query';

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
