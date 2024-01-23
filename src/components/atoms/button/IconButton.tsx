import { Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import svgIcon from '@type/svgIcon';

type IconButtonProps = {
	className?: string;
	icon: svgIcon;
	onClick: () => void;
};

const IconButton = ({ className, icon, onClick }: IconButtonProps) => {
	return (
		<Button
			className={`${className} active:bg-transparent`}
			onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
				e.stopPropagation();
				onClick();
			}}
			clear
		>
			<SvgIcon
				id={icon.id}
				color={icon.color}
				width={icon.width || icon.size}
				height={icon.height || icon.size}
			/>
		</Button>
	);
};

export default IconButton;
