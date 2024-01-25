import { SearchTextField } from '@components/atoms';
import { PostSearchHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { mockSearchResultData } from '@mocks/search';
import { SearchQuery } from '@type/searchQuery';

type PostSearchProps = {
	searchQuery: SearchQuery;
};

const PostSearch = ({ searchQuery }: PostSearchProps) => {
	const searchResultList = mockSearchResultData.searchResultList;

	return (
		<>
			<SearchTextField defaultValue={searchQuery} />
			<PostSearchHeader />
			<div className="my-3">
				<ProductCardList type="heart" productList={searchResultList} />
			</div>
		</>
	);
};

export default PostSearch;
