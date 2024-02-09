import { getAccountInfo } from '@apis/account';
import { useSuspenseQuery } from '@tanstack/react-query';

export const useGetAccountInfo = () => {
	return useSuspenseQuery({
		queryKey: ['accountInfo'],
		queryFn: () => getAccountInfo(),
		select: data => data.data,
	});
};
