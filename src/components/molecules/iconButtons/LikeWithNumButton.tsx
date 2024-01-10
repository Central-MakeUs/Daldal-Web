import SvgIcon from '@assets/icons/SvgIcon';
import IconButton from '@components/atoms/IconButton';
import { moleculeIconButton } from '@type/moleculeIconButton';

const LikeWithNumButton = ({ onClick }: moleculeIconButton) => {
	return (
		<IconButton width={12} size="large" bgColor="Black" onClick={onClick}>
			<SvgIcon id="like-with-num" size={32} />
		</IconButton>
	);
};

export default LikeWithNumButton;
