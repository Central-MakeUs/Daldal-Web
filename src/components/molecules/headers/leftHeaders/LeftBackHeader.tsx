import IconButton from '@components/atoms/button/IconButton';
import colors from '@constants/colors';
import { useHistory } from 'react-router-dom';

const LeftBackHeader = () => {
	const history = useHistory();
	const handleClick = () => {
		history.go(-1);
	};
	return (
		<IconButton
			className="!w-8 !px-0 !py-4"
			icon={{
				id: 'direction-left',
				width: 24,
				color: colors.White,
			}}
			onClick={handleClick}
		/>
	);
};

export default LeftBackHeader;
