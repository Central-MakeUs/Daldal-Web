import { getAccountInfo, patchAccountInfo } from '@apis/account';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const useGetAccountInfo = () => {
	return useSuspenseQuery({
		queryKey: ['accountInfo'],
		queryFn: () => getAccountInfo(),
		select: data => data.data,
	});
};

export const usePatchAccountIfo = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: () => patchAccountInfo(),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
