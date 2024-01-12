import IconButton from '@components/atoms/IconButton';
import colors from '@constants/colors';
import { useHistory } from 'react-router';

const LeftBackHeader = () => {
	const history = useHistory();
	const handleClick = () => {
		history.goBack();
	};
	return (
		<IconButton
			className="!w-8 !px-0 !py-4 active:bg-opacity-0"
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
