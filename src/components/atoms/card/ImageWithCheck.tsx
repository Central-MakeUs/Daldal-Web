import { useState } from 'react';

import { BackdropFilter, IconButton } from '@components/atoms';
import colors from '@constants/colors';

type ImageWithCheckProps = {
	src: string;
	alt: string;
};

const ImageWithCheck = ({ src, alt }: ImageWithCheckProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChangeCheck = () => {
		setIsChecked(prev => !prev);
	};

	return (
		<div
			className="relative rounded-[5px] overflow-hidden w-full aspect-square"
			onClick={handleChangeCheck}
		>
			<img src={src} alt={alt} className="w-full h-full" />
			<IconButton
				icon={{
					id: 'circle-check',
					width: 24,
					color: isChecked ? colors.Primary : colors.Gray20,
				}}
				className="!w-fit absolute top-1 right-1 z-10"
				onClick={handleChangeCheck}
			/>
			<BackdropFilter isOverlayNeeded={isChecked} />
		</div>
	);
};

export default ImageWithCheck;
