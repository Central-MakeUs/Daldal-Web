import {
	LeftLogoHeader,
	LeftBackHeader,
	LeftHomeHeader,
	RightHeader,
} from '@components/molecules';

export type LeftHeaderProps = {
	leftType: 'logo' | 'back' | 'home';
};

const Header = ({ leftType }: LeftHeaderProps) => {
	return (
		<div className="flex flex-row w-full justify-between items-center pl-3 pr-3.5 pt-3 pb-[13px] bg-Gray90 sticky top-0 z-20">
			<div>
				{leftType === 'logo' && <LeftLogoHeader />}
				{leftType === 'back' && <LeftBackHeader />}
				{leftType === 'home' && <LeftHomeHeader />}
			</div>
			<RightHeader />
		</div>
	);
};

export default Header;
