import { useEffect } from 'react';

import { SearchTextField } from '@components/atoms';
import { CategoryButtonList } from '@components/molecules';
import {
	RecommendationProductCardList,
	ProductCardList,
} from '@components/organisms';
import { useGetProductSimpleList } from '@hooks/apis/product';
import PageLayout from '@layouts/PageLayout';
import { setAccessToken, setRefreshToken } from '@utils/localStorage/token';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
	const { data } = useGetProductSimpleList();

	//TODO params access/refresh token 받아오기
	const [searchParams] = useSearchParams();
	const accessTokenParam = searchParams.get('access-token');
	const refreshTokenParam = searchParams.get('refresh-token');

	useEffect(() => {
		if (accessTokenParam) {
			setAccessToken(accessTokenParam);
		}
		if (refreshTokenParam) {
			setRefreshToken(refreshTokenParam);
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
				<ProductCardList
					type="heart"
					productList={data?.pages[0].data.itemResponses}
				/>
			</div>
		</PageLayout>
	);
};

export default Home;
