import { getProductSimpleList } from '@apis/product';
import { CategoryName } from '@constants/categoryList';
import { useInfiniteQuery } from '@tanstack/react-query';

export const useGetProductSimpleList = (itemCategoryType?: CategoryName) => {
	return useInfiniteQuery({
		queryKey: ['productSimpleList'],
		queryFn: ({ pageParam = 1 }) =>
			getProductSimpleList(pageParam, itemCategoryType),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			//TODO isLast 반영
			return lastPage?.data?.data ? undefined : nextPage;
		},
	});
};
