import { Button } from 'konsta/react';
import { useEffect } from 'react';

import { SearchTextField } from '@components/atoms';
import { CategoryButtonList } from '@components/molecules';
import {
	RecommendationProductCardList,
	ProductCardList,
} from '@components/organisms';
import { useGetUserInfo } from '@hooks/apis/auth';
import { useGetProductSimpleList } from '@hooks/apis/product';
import PageLayout from '@layouts/PageLayout';
import { setAccessToken, setRefreshToken } from '@utils/localStorage/token';
import { useSearchParams } from 'react-router-dom';

const Home = () => {
	const { data: productSimpleList } = useGetProductSimpleList();
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
				<ProductCardList
					type="heart"
					productList={productSimpleList?.pages[0].data.itemResponses}
				/>
			</div>
			<Button
				onClick={() => {
					setAccessToken(
						'eyJhbGciOiJIUzUxMiJ9.eyJpZCI6MSwiaWF0IjoxNzA3NjgzOTEwLCJleHAiOjE3MjU2ODM5MTAsImF1dGhvcml0aWVzIjoiUk9MRV9BRE1JTixST0xFX1VTRVIifQ.jMuyrJ0q5oanPux-q3tLEGNiU9eZFS2EOb6ARQsKw76sh9Mat7avnFB-w7GzC7Hcwb1pHA657WOclEWDdhqJvw',
					);
				}}
			>
				token
			</Button>
		</PageLayout>
	);
};

export default Home;
