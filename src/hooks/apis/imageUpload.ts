import { getImageUploadSimpleList } from '@apis/imageUpload';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetImageUploadSimpleList = () => {
	return useSuspenseQuery({
		queryKey: ['imageUploadSimpleList'],
		queryFn: () => getImageUploadSimpleList(),
		select: data => data.data,
	});
};
