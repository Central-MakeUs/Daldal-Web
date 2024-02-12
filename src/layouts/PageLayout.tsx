import { ReactNode } from 'react';

import { Header } from '@components/organisms';
import { LeftHeaderProps } from '@components/organisms/Header';

export type PageLayoutDefaultProps = {
	children: ReactNode;
	className?: string;
};

type PageLayoutProps = PageLayoutDefaultProps & LeftHeaderProps;

const PageLayout = ({
	children,
	className,
	leftType,
	rightType,
}: PageLayoutProps) => {
	return (
		<div className="w-[600px] h-fit min-h-screen">
			<Header leftType={leftType} rightType={rightType} />
			<div className={`w-full ${className}`}>{children}</div>
		</div>
	);
};

export default PageLayout;
