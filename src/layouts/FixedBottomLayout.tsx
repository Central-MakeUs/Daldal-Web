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
			<div className="fixed bottom-5 left-0 grid place-items-center z-10 bg-Gray90 w-full">
				<div className="w-full max-w-[600px]">
					<div className={`w-full ${childrenPadding}`}>{children}</div>
				</div>
			</div>
		</>
	);
};

export default FixedBottomLayout;
