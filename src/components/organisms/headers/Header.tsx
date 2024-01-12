import React from 'react';

type HeaderProps = {
	children: React.ReactNode;
};

const Left = ({ children }: HeaderProps) => <div>{children}</div>;

const Right = ({ children }: HeaderProps) => <div>{children}</div>;

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
