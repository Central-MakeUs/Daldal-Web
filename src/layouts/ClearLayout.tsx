import { PageLayoutDefaultProps } from './PageLayout';

const ClearLayout = ({ children, className }: PageLayoutDefaultProps) => {
	return (
		<div
			className={`max-w-[600px] w-full h-screen px-[23px] py-5 ${className}`}
		>
			{children}
		</div>
	);
};

export default ClearLayout;
