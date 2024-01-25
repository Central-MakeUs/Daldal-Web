import { SearchTextField } from '@components/atoms';
import { CategoryButtonList } from '@components/molecules';
import {
	RecommendationProductCardList,
	ProductCardList,
} from '@components/organisms';
import PageLayout from '@layouts/PageLayout';

const Home = () => {
	return (
		<PageLayout leftType="logo">
			<div className="px-3 pt-3 relative">
				<SearchTextField readOnly />
				<RecommendationProductCardList />
			</div>
			<CategoryButtonList />
			<div className="px-3 pb-3 my-3 relative">
				<ProductCardList type="heart" />
			</div>
		</PageLayout>
	);
};

export default Home;
