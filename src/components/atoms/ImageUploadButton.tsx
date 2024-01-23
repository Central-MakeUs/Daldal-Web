import { Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import colors from '@constants/colors';

const ImageUploadButton = () => {
	const handleClick = () => {
		console.log('갤러리/폴더 열기');
	};
	return (
		<Button
			className="k-color-Gray80 rounded-[5px] h-full !relative flex items-center justify-center aspect-square active:opacity-30"
			onClick={handleClick}
		>
			<SvgIcon id="plus" size={32} color={colors.Gray50} />
		</Button>
	);
};

export default ImageUploadButton;
