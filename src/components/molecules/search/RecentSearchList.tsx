import { SearchTag } from '@components/atoms';
import { useSearchHistoryStore } from '@stores/searchHistoryStore';

const RecentSearchList = () => {
	const searchHistory = useSearchHistoryStore(state => state.searchHistoryList);
	return (
		<div className="w-full flex flex-wrap gap-2">
			{searchHistory.map((searchQuery, index) => (
				<div className="py-3" key={`SearchQuery#${index}`}>
					<SearchTag searchQuery={searchQuery} />
				</div>
			))}
		</div>
	);
};

export default RecentSearchList;
