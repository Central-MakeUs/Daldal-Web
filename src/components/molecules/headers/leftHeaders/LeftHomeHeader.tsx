import IconButton from '@components/atoms/IconButton';
import colors from '@constants/colors';

const LeftHomeHeader = () => {
	const handleClick = () => {
		console.log('home으로 이동');
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
