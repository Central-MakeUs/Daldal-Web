import { header } from '@type/header';
import React from 'react';

const Header: React.FC<header> = ({ leftHeader, rightHeader }) => {
	return (
		<div className="flex flex-row w-full justify-between items-center">
			{leftHeader}
			{rightHeader}
		</div>
	);
};

export default Header;
