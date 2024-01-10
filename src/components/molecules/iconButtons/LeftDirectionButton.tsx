import SvgIcon from '@assets/icons/SvgIcon';
import IconButton from '@components/atoms/IconButton';
import { moleculeIconButtonWithColor } from '@type/moleculeIconButton';

const LeftDirectionButton = ({
	onClick,
	color,
}: moleculeIconButtonWithColor) => {
	return (
		<IconButton width={12} size="large" bgColor="Black" onClick={onClick}>
			<SvgIcon id="direction-left" size={24} color={color} />
		</IconButton>
	);
};

export default LeftDirectionButton;
