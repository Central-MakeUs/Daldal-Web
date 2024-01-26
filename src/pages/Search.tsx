import { PostSearch } from '@components/templates';
import PreSearch from '@components/templates/search/PreSearch';
import PageLayout from '@layouts/PageLayout';
import { useSearchParams } from 'react-router-dom';

const Search = () => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('query') || '';

	const renderSearchPage = () => {
		if (query === '') {
			return <PreSearch />;
		}

		return <PostSearch searchQuery={query} />;
	};

	return (
		<PageLayout className="px-3" leftType="back">
			{renderSearchPage()}
		</PageLayout>
	);
};

export default Search;
