import { resolveValue, Toaster } from 'react-hot-toast';

type CustomToasterProps = {
	className: string;
};

const CustomToaster = ({ className }: CustomToasterProps) => {
	return (
		<Toaster position="bottom-center" reverseOrder={false}>
			{t => (
				<div className={`w-full max-w-[600px] ${className}`}>
					{resolveValue(t.message, t)}
				</div>
			)}
		</Toaster>
	);
};

export default CustomToaster;
