import { ReactNode } from 'react';

type FixedBottomLayoutProps = {
	children: ReactNode;
	height: string;
	childrenPadding: string;
	bottom?: string;
};

const FixedBottomLayout = ({
	children,
	height,
	childrenPadding,
	bottom = 'bottom-5',
}: FixedBottomLayoutProps) => {
	return (
		<>
			<div className={`${height} w-full`} />
			<div
				className={`fixed ${bottom} left-0 grid place-items-center z-10 bg-Gray90 w-full`}
			>
				<div className={`w-full max-w-[600px] ${childrenPadding}`}>
					{children}
				</div>
			</div>
		</>
	);
};

export default FixedBottomLayout;
