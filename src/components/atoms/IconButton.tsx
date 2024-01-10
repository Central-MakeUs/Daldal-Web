import { iconButton } from '@type/iconButton';
import { Button } from 'konsta/react';

const IconButton = ({
	children,
	width,
	size,
	bgColor,
	onClick,
}: iconButton) => {
	const largeBool = size === 'large' ? true : false;
	const smallBool = size === 'small' ? true : false;

	return (
		<div className={`w-${width}`}>
			<Button
				className={`k-color-${bgColor}`}
				large={largeBool}
				small={smallBool}
				onClick={onClick}
				clear
			>
				{children}
			</Button>
		</div>
	);
};

export default IconButton;
