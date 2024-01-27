/* eslint-disable @typescript-eslint/no-explicit-any */

const BarContainer = ({ animationDuration, children, isFinished }: any) => (
	<div
		className={`relative ${
			isFinished ? 'opacity-0' : 'opacity-100'
		} pointer-events-none`}
		style={{
			transition: `opacity ${animationDuration}ms linear`,
		}}
	>
		<div className="bg-Gray10 w-full fixed top-0 left-0 h-1 z-40" />
		{children}
	</div>
);

export default BarContainer;
