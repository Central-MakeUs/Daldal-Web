import { Tag } from '@components/atoms';

type SearchTagProps = {
	searchQuery: string;
};

const SearchTag = ({ searchQuery }: SearchTagProps) => {
	return (
		<Tag
			title={searchQuery}
			colors={{ bgColor: 'Gray70', textColor: 'White' }}
			size="large"
		/>
	);
};

export default SearchTag;
