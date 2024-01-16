import CheckButton from '@components/atoms/CheckButton';
import { useState } from 'react';

import BackdropFilter from '@components/atoms/BackdropFilter';
import IconButton from '@components/atoms/button/IconButton';
import colors from '@constants/colors';

type ImageWithCheckProps = {
	src: string;
	alt: string;
	onClick?: () => void;
	size: number;
};

const ImageWithCheck = ({ src, alt, onClick, size }: ImageWithCheckProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const handleChangeCheck = () => {
		setIsChecked(!isChecked);
	};

	return (
		<div className="relative rounded-[5px] overflow-hidden" onClick={onClick}>
			<img src={src} alt={alt} width={size} height={size} />
			<div>
				<IconButton
					icon={{
						id: 'circle-check',
						width: 24,
						color: isChecked ? colors.Primary : colors.Gray20,
					}}
					onClick={handleChangeCheck}
					className="absolute top-1 right-1 z-10"
				/>
			</div>
			<BackdropFilter isOverlayNeeded={isChecked} />
		</div>
	);
};

export default ImageWithCheck;
