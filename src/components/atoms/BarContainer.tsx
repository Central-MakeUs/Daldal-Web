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
		{children}
	</div>
);

export default BarContainer;
