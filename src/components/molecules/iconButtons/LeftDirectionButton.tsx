import SvgIcon from '@assets/icons/SvgIcon';
import IconButton from '@components/atoms/IconButton';
import { moleculeIconButtonWithColor } from '@type/moleculeIconButton';

const LeftDirectionButton: React.FC<moleculeIconButtonWithColor> = ({
	onClick,
	color,
}) => {
	return (
		<IconButton width={12} size="large" bgColor="Black" onClick={onClick}>
			<SvgIcon id="direction-left" size={24} color={color} />
		</IconButton>
	);
};

export default LeftDirectionButton;
