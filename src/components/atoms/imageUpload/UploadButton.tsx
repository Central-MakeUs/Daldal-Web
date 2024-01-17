import IconButton from '@components/atoms/button/IconButton';

const UploadButton = () => {
	const handleClick = () => {
		console.log('갤러리/폴더 열기');
	};
	return (
		<div className="bg-Gray80 rounded-[5px] relative flex items-center justify-center aspect-square">
			<IconButton
				icon={{
					id: 'plus',
					size: 32,
				}}
				onClick={handleClick}
			/>
		</div>
	);
};

export default UploadButton;
