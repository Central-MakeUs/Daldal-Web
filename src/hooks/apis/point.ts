import { getCurrentPoint, getExpectedPoint } from '@apis/point';
import { useSuspenseQuery } from '@tanstack/react-query';

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
