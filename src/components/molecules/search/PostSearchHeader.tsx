type PostSearchHeaderProps = {
	totalNumber?: number;
};

const PostSearchHeader = ({ totalNumber = 0 }: PostSearchHeaderProps) => {
	return (
		<h4 className="typography-Body4 typography-R text-White">
			검색 결과 <span className="text-Primary">{totalNumber}</span> 개
		</h4>
	);
};

export default PostSearchHeader;
