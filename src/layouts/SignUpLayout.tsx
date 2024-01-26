import { PageLayoutDefaultProps } from './PageLayout';

const SignUpLayout = ({ children, className }: PageLayoutDefaultProps) => {
	return (
		<div className={`max-w-[600px] w-full h-fit min-h-screen ${className}`}>
			{children}
		</div>
	);
};

export default SignUpLayout;
