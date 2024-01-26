import { SearchTag } from '@components/atoms';
import { useSearchHistoryStore } from '@stores/searchHistoryStore';
import { SearchQuery } from '@type/searchQuery';
import { useSearchParams } from 'react-router-dom';

const RecentSearchList = () => {
	const searchHistory = useSearchHistoryStore(state => state.searchHistoryList);
	const [searchParams, setSearchParams] = useSearchParams();

	const handleSearchTagClick = (searchQuery: SearchQuery) => {
		searchParams.set('query', searchQuery);
		setSearchParams(searchParams);
	};

	return (
		<div className="w-full flex flex-wrap gap-2">
			{searchHistory.map((searchQuery, index) => (
				<div
					className="py-3 cursor-pointer"
					key={`SearchQuery#${index}`}
					onClick={() => handleSearchTagClick(searchQuery)}
				>
					<SearchTag searchQuery={searchQuery} />
				</div>
			))}
		</div>
	);
};

export default RecentSearchList;
