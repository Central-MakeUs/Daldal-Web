import {
	getProductDetailList,
	getProductSimpleList,
	getRecommendedProductSimpleList,
} from '@apis/product';
import { CategoryName } from '@constants/categoryList';
import { useInfiniteQuery, useSuspenseQuery } from '@tanstack/react-query';

export const useGetProductSimpleList = (itemCategoryType?: CategoryName) => {
	return useInfiniteQuery({
		queryKey: ['productSimpleList'],
		queryFn: ({ pageParam = 1 }) =>
			getProductSimpleList(pageParam, itemCategoryType),
		initialPageParam: 1,
		getNextPageParam: (lastPage, allPages) => {
			const nextPage = allPages.length + 1;
			return lastPage?.data.isLastPage ? undefined : nextPage;
		},
	});
};

export const useGetRecommendedProductSimpleList = () => {
	return useSuspenseQuery({
		queryKey: ['recommendedProductSimpleList'],
		queryFn: () => getRecommendedProductSimpleList(),
		select: data => data.data,
	});
};

export const useGetProductDetailList = (id: number) => {
	return useSuspenseQuery({
		queryKey: ['productDetailList'],
		queryFn: () => getProductDetailList(id),
		select: data => data.data,
	});
};
