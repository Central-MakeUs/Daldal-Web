import { SearchTextField } from '@components/atoms';
import { PostSearchHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { useSearch } from '@hooks/apis/search';
import { SearchQuery } from '@type/searchQuery';

type PostSearchProps = {
	searchQuery: SearchQuery;
};

const PostSearch = ({ searchQuery }: PostSearchProps) => {
	const { data } = useSearch(searchQuery);

	return (
		<>
			<SearchTextField defaultValue={searchQuery} />
			<PostSearchHeader totalNumber={data?.pages[0].data.count} />
			<div className="my-3">
				<ProductCardList
					type="heart"
					productList={data?.pages[0].data.itemResponses}
				/>
			</div>
		</>
	);
};

export default PostSearch;
