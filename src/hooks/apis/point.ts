import {
	getCumulatedPoint,
	getCurrentPoint,
	getExpectedPoint,
	postPointWithdraw,
} from '@apis/point';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

export const useGetCurrentPoint = () => {
	return useSuspenseQuery({
		queryKey: ['currentPoint'],
		queryFn: () => getCurrentPoint(),
		select: data => data.data,
	});
};

export const useGetExpectedPoint = () => {
	return useSuspenseQuery({
		queryKey: ['expectedPoint'],
		queryFn: () => getExpectedPoint(),
		select: data => data.data,
	});
};

export const useGetCumulatedPoint = () => {
	return useSuspenseQuery({
		queryKey: ['cumulatedPoint'],
		queryFn: () => getCumulatedPoint(),
		select: data => data.data,
	});
};

export const usePostPointWithdraw = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (refund: number) => postPointWithdraw(refund),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
