import { SearchTextField } from '@components/atoms';
import { CategoryButtonList } from '@components/molecules';
import {
	RecommendationProductCardList,
	ProductCardList,
} from '@components/organisms';
import { useGetProductSimpleList } from '@hooks/apis/product';
import PageLayout from '@layouts/PageLayout';

const Home = () => {
	const { data } = useGetProductSimpleList();

	console.log(data);
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
				<ProductCardList type="heart" />
			</div>
		</PageLayout>
	);
};

export default Home;
