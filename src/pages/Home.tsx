import { SearchTextField } from '@components/atoms';
import { CategoryButtonList } from '@components/molecules';
import {
	RecommendationProductCardList,
	ProductCardList,
} from '@components/organisms';
import PageLayout from '@layouts/PageLayout';

const Home = () => {
	return (
		<PageLayout leftType="logo" className="p-3 relative">
			<SearchTextField />
			<RecommendationProductCardList />
			<CategoryButtonList />
			<div className="my-3">
				<ProductCardList type="heart" />
			</div>
		</PageLayout>
	);
};

export default Home;
