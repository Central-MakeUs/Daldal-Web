import { getCurrentPoint } from '@apis/point';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetCurrentPoint = () => {
	return useSuspenseQuery({
		queryKey: ['currentPoint'],
		queryFn: () => getCurrentPoint(),
		select: data => data.data,
	});
};
