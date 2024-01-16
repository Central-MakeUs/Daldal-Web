import SearchTextField from '@components/atoms/SearchTextField';
import CategoryButtonList from '@components/molecules/CategoryButtonList';
import ProductCardList from '@components/organisms/ProductCardList';
import RecommendationProductCardList from '@components/organisms/RecommendationProductCardList';
import PageLayout from '@components/templates/PageLayout';

const Home = () => {
	return (
		<PageLayout leftType="logo" className="relative">
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
