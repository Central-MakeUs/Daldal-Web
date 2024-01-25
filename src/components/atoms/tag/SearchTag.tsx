import { Tag } from '@components/atoms';

type SearchTagProps = {
	query: string;
};

const SearchTag = ({ query }: SearchTagProps) => {
	return (
		<Tag
			title={query}
			colors={{ bgColor: 'Gray70', textColor: 'White' }}
			size="large"
		/>
	);
};

export default SearchTag;
