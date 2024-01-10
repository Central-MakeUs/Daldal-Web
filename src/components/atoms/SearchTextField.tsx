import { useState } from 'react';

import SvgIcon from '@assets/icons/SvgIcon';
import colors from '@constants/colors';

interface SearchTextFieldProps {
	isFocused?: boolean;
}

function SearchTextField({ isFocused = false }: SearchTextFieldProps) {
	const [searchValue, setSearchValue] = useState('');

	const handleClearSearchValue = () => {
		setSearchValue('');
	};

	const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleClearSearchValue();
		}
	};

	return (
		<div className="bg-Gray80 rounded-[100px] w-full flex px-4 py-[6px] gap-2 justify-center items-center">
			<SvgIcon id="search" size={24} color={colors.Gray20} />
			<input
				autoFocus={isFocused}
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				onKeyDown={handleEnter}
				type="text"
				placeholder="Search"
				className="bg-Gray80 text-white placeholder:text-Gray20 flex-1 focus-visible:outline-none typography-Body2 typography-R"
			/>
		</div>
	);
}

export default SearchTextField;
