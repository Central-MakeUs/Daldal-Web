import SvgIcon from '@assets/icons/SvgIcon';
import colors from '@constants/colors';

function SearchTextField() {
	return (
		<div className="bg-Gray80 rounded-[100px] w-full flex px-4 py-[6px] gap-2 justify-center items-center">
			<SvgIcon id="search" size={24} color={colors.Gray20} />
			<input
				type="text"
				placeholder="Search"
				className="bg-Gray80 text-white placeholder:text-Gray20 flex-1 focus-visible:outline-none typography-Body2 typography-R"
			/>
		</div>
	);
}

export default SearchTextField;
