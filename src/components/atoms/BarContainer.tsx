import { ReactNode } from 'react';

type BarContainerProps = {
	children: ReactNode;
	isFinished: boolean;
};

const BarContainer = ({ children, isFinished }: BarContainerProps) => (
	<div
		className={`relative ${
			isFinished ? 'opacity-0' : 'opacity-100'
		} pointer-events-none`}
	>
		<div className="w-full fixed left-0 top-0 h-1 bg-Gray10" />
		{children}
	</div>
);

export default BarContainer;
