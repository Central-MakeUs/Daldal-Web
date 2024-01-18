import { ReactNode } from 'react';

type FixedBottomLayoutProps = {
	children: ReactNode;
	height: string;
	childrenPadding: string;
};

const FixedBottomLayout = ({
	children,
	height,
	childrenPadding,
}: FixedBottomLayoutProps) => {
	return (
		<>
			<div className={`${height} w-full`} />
			<div className="fixed bottom-5 left-2/4 -translate-x-2/4 w-full max-w-[600px] z-10">
				<div className={`w-full ${childrenPadding}`}>{children}</div>
			</div>
		</>
	);
};

export default FixedBottomLayout;
