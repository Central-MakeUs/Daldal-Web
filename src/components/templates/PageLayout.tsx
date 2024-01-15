import { ReactNode } from 'react';

import Header, { LeftHeaderProps } from '@components/organisms/Header';

interface PageLayoutProps extends LeftHeaderProps {
	children: ReactNode;
	className?: string;
}

const PageLayout = ({ children, className, leftType }: PageLayoutProps) => {
	return (
		<div className="w-[600px] h-full">
			<Header leftType={leftType} />
			<div className={`px-[25px] py-3 ${className}`}>{children}</div>;
		</div>
	);
};

export default PageLayout;
