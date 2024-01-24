import { ReactNode } from 'react';

type PointHistoryProps = {
	children: ReactNode;
};

const PointHistory = ({ children }: PointHistoryProps) => {
	return (
		<div className="flex flex-col gap-6 bg-Gray80 p-4 rounded-[13px]">
			{children}
		</div>
	);
};

export default PointHistory;
