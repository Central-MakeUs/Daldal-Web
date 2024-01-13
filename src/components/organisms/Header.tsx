import LeftBackHeader from '@components/molecules/headers/leftHeaders/LeftBackHeader';
import LeftLogoHeader from '@components/molecules/headers/leftHeaders/LeftLogoHeader';
import RightHeader from '@components/molecules/headers/rightHeaders/RightHeader';
import React from 'react';

type HeaderProps = {
	children: React.ReactNode;
};

type LeftHeaderProps = {
	leftType: 'logo' | 'back';
};

type RightHeaderProps = {
	rightType: 'default' | 'likeWithNum';
};

const Left = ({ leftType }: LeftHeaderProps) => (
	<div>
		{leftType === 'logo' && <LeftLogoHeader />}
		{leftType === 'back' && <LeftBackHeader />}
	</div>
);

const Right = ({ rightType }: RightHeaderProps) => (
	<div>
		{rightType === 'default' && <RightHeader likeWithNum={false} />}
		{rightType === 'likeWithNum' && <RightHeader likeWithNum={true} />}
	</div>
);

const Header = ({ children }: HeaderProps) => {
	return (
		<div className="flex flex-row w-full justify-between items-center pl-3 pr-3.5 pt-3 pb-[13px]">
			{children}
		</div>
	);
};

Header.Left = Left;
Header.Right = Right;

export default Header;
