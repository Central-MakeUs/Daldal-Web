import { Preloader } from 'konsta/react';

import { SearchTextField } from '@components/atoms';
import { PostSearchHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { useSearch } from '@hooks/apis/search';
import useIntersection from '@hooks/infiniteScroll';
import { SearchQuery } from '@type/searchQuery';

type PostSearchProps = {
	searchQuery: SearchQuery;
};

const PostSearch = ({ searchQuery }: PostSearchProps) => {
	const { data, fetchNextPage, isFetchingNextPage } = useSearch(searchQuery);
	const intersectionRef = useIntersection(fetchNextPage);

	return (
		<>
			<SearchTextField defaultValue={searchQuery} />
			<PostSearchHeader totalNumber={data?.pages[0].data.count} />
			<div className="my-3">
				{data?.pages.map((page, index) => (
					<ProductCardList
						key={`PostSearch#${index}`}
						productList={page.data.itemResponses}
						type="heart"
					/>
				))}
			</div>
			<div ref={intersectionRef} className="w-full h-6" />
			{isFetchingNextPage && (
				<div className="w-full h-full flex justify-center items-center">
					<Preloader className="k-color-Primary" />
				</div>
			)}
		</>
	);
};

export default PostSearch;
