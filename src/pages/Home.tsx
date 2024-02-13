import { Preloader } from 'konsta/react';
import { useEffect } from 'react';

import { SearchTextField } from '@components/atoms';
import { CategoryButtonList } from '@components/molecules';
import {
	RecommendationProductCardList,
	ProductCardList,
} from '@components/organisms';
import { useGetUserInfo } from '@hooks/apis/auth';
import { useGetProductSimpleList } from '@hooks/apis/product';
import useIntersection from '@hooks/infiniteScroll';
import PageLayout from '@layouts/PageLayout';
import { setAccessToken, setRefreshToken } from '@utils/localStorage/token';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
	const {
		data: productSimpleList,
		fetchNextPage,
		isFetchingNextPage,
	} = useGetProductSimpleList();
	const intersectionRef = useIntersection(fetchNextPage);
	const { mutate } = useGetUserInfo();

	const [searchParams] = useSearchParams();
	const accessTokenParam = searchParams.get('access-token');
	const refreshTokenParam = searchParams.get('refresh-token');

	useEffect(() => {
		if (accessTokenParam && refreshTokenParam) {
			setAccessToken(accessTokenParam);
			setRefreshToken(refreshTokenParam);
			mutate();
		}
	}, []);

	return (
		<PageLayout leftType="logo" className="flex flex-col">
			<div className="px-3 relative flex flex-col">
				<SearchTextField readOnly />
				<div className="my-3">
					<RecommendationProductCardList />
				</div>
			</div>
			<CategoryButtonList />
			<div className="px-3 my-3 relative">
				{productSimpleList?.pages.map((page, index) => (
					<ProductCardList
						key={`ProductCardList#${index}`}
						productList={page.data.itemResponses}
						gridCols={2}
					/>
				))}
			</div>
			<div ref={intersectionRef} className="w-full h-6" />
			{isFetchingNextPage && (
				<div className="w-full h-full flex justify-center items-center">
					<Preloader className="k-color-Primary" />
				</div>
			)}
		</PageLayout>
	);
};

export default Home;
