import { header } from '@type/header';

const Header = ({ leftHeader, rightHeader }: header) => {
	return (
		<div className="flex flex-row w-full justify-between items-center">
			{leftHeader}
			{rightHeader}
		</div>
	);
};

export default Header;
