import Header, { LeftHeaderProps } from '@components/organisms/Header';
import { ReactNode } from 'react';

interface PageLayoutProps extends LeftHeaderProps {
	children: ReactNode;
	className?: string;
}

function PageLayout({ children, className, leftType }: PageLayoutProps) {
	return (
		<div>
			<Header leftType={leftType} />
			<div className={`px-[25px] py-3 ${className}`}>{children}</div>;
		</div>
	);
}

export default PageLayout;
