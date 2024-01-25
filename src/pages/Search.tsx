import PreSearch from '@components/templates/search/PreSearch';
import PageLayout from '@layouts/PageLayout';

const Search = () => {
	return (
		<PageLayout className="px-3" leftType="back">
			<PreSearch />
		</PageLayout>
	);
};

export default Search;
