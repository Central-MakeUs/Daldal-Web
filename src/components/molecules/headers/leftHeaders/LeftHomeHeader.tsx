import { IconButton } from '@components/atoms';
import colors from '@constants/colors';
import { useNavigate } from 'react-router-dom';

const LeftHomeHeader = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate('/');
	};

	return (
		<IconButton
			className="!w-8 !px-0 !py-4"
			icon={{
				id: 'home',
				width: 32,
				color: colors.White,
			}}
			onClick={handleClick}
		/>
	);
};

export default LeftHomeHeader;
