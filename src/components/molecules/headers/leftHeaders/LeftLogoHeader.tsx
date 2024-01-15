import IconButton from '@components/atoms/button/IconButton';

const LeftLogoHeader = () => {
	const handleClick = () => {
		console.log('향후 적용 예정');
	};

	return (
		<IconButton
			className="!w-28 !px-0 !py-4"
			icon={{
				id: 'app-logo',
				width: 120,
			}}
			onClick={handleClick}
		/>
	);
};

export default LeftLogoHeader;
