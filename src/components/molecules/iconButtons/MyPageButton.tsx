import SvgIcon from '@assets/icons/SvgIcon';
import IconButton from '@components/atoms/IconButton';
import { moleculeIconButton } from '@type/moleculeIconButton';

const MyPageButton = ({ onClick }: moleculeIconButton) => {
	return (
		<IconButton width={12} size="large" bgColor="Black" onClick={onClick}>
			<SvgIcon id="mypage-person" size={32} />
		</IconButton>
	);
};

export default MyPageButton;
