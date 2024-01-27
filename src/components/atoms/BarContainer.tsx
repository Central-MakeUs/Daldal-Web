/* eslint-disable @typescript-eslint/no-explicit-any */

const BarContainer = ({ animationDuration, children, isFinished }: any) => (
	<div
		className={`relative bg-Gray20 ${
			isFinished ? 'opacity-0' : 'opacity-100'
		} pointer-events-none`}
		style={{
			transition: `opacity ${animationDuration}ms linear`,
		}}
	>
		{/* <div className="relative max-w-[600px]"> */}
		{children}
		{/* </div> */}
	</div>
);

export default BarContainer;
