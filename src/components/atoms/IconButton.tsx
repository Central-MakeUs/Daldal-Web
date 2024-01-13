import SvgIcon from '@components/common/SvgIcon';
import svgIcon from '@type/svgIcon';
import { Button } from 'konsta/react';

type IconButton = {
	className?: string;
	icon: svgIcon;
	onClick: () => void;
};

const IconButton = ({ className, icon, onClick }: IconButton) => {
	return (
		<Button
			className={`${className} active:bg-transparent`}
			onClick={onClick}
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
