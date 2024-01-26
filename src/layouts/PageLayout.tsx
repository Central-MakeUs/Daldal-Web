import { ReactNode } from 'react';

import { Header } from '@components/organisms';
import { LeftHeaderProps } from '@components/organisms/Header';

export type PageLayoutDefaultProps = {
	children: ReactNode;
	className?: string;
};

const PageLayout = ({
	children,
	className,
	leftType,
}: PageLayoutDefaultProps & LeftHeaderProps) => {
	return (
		<div className="w-[600px] h-fit min-h-screen">
			<Header leftType={leftType} />
			<div className={`w-full ${className}`}>{children}</div>
		</div>
	);
};

export default PageLayout;
