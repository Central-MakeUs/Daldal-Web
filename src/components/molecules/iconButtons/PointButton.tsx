import SvgIcon from '@assets/icons/SvgIcon';
import IconButton from '@components/atoms/IconButton';
import { moleculeIconButton } from '@type/moleculeIconButton';

const PointButton: React.FC<moleculeIconButton> = ({ onClick }) => {
	return (
		<IconButton width={12} size="large" bgColor="Black" onClick={onClick}>
			<SvgIcon id="point-paid" size={24} />
		</IconButton>
	);
};

export default PointButton;
