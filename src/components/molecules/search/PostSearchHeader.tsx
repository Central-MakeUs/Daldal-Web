import { mockSearchResultData } from '@mocks/search';

const PostSearchHeader = () => {
	// TODO: api를 통해 검색 결과 개수 가져오기
	const searchResultCount = mockSearchResultData.totalSearchCount;

	return (
		<h4 className="typography-Body4 typography-R text-White">
			검색 결과 <span className="text-Primary">{searchResultCount}</span> 개
		</h4>
	);
};

export default PostSearchHeader;
