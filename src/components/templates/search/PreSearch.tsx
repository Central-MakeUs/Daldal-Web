import { SearchTextField } from '@components/atoms';
import RecentSearchListContainer from '@components/organisms/RecentSearchListContainer';

const PreSearch = () => {
	return (
		<>
			<SearchTextField isFocused />
			<RecentSearchListContainer />
		</>
	);
};

export default PreSearch;
