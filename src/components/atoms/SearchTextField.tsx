import { useState, KeyboardEvent } from 'react';

import { IconButton } from '@components/atoms';
import { SvgIcon } from '@components/common';
import colors from '@constants/colors';

type SearchTextFieldProps = {
	isFocused?: boolean;
};

const SearchTextField = ({ isFocused = false }: SearchTextFieldProps) => {
	const [searchValue, setSearchValue] = useState('');

	const handleClearSearchValue = () => {
		setSearchValue('');
	};

	const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleClearSearchValue();
		}
	};

	const isSearchValueEmpty = searchValue === '';
	const renderClearButton = () => {
		if (isSearchValueEmpty) {
			return null;
		}

		return (
			<IconButton
				onClick={handleClearSearchValue}
				icon={{
					id: 'close',
					size: 24,
					color: colors.Gray20,
				}}
				className="!w-fit !p-0 !h-fit"
			/>
		);
	};

	return (
		<div className="bg-Gray80 rounded-[100px] w-full flex px-4 py-[6px] gap-2 justify-center items-center mb-6">
			<SvgIcon id="search" size={24} color={colors.Gray20} />
			<input
				autoFocus={isFocused}
				value={searchValue}
				onChange={e => setSearchValue(e.target.value)}
				onKeyDown={handleEnter}
				type="text"
				placeholder="화장품 사고 3% 환급받자💄"
				className="bg-Gray80 text-white placeholder:text-Gray20 flex-1 focus-visible:outline-none typography-Body2 typography-R"
			/>
			{renderClearButton()}
		</div>
	);
};

export default SearchTextField;
