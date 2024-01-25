import { SearchTextField } from '@components/atoms';
import RecentSearchListContainer from '@components/organisms/RecentSearchListContainer';
import PageLayout from '@layouts/PageLayout';

const Search = () => {
	return (
		<PageLayout className="px-3" leftType="back">
			<SearchTextField isFocused />
			<RecentSearchListContainer />
		</PageLayout>
	);
};

export default Search;
