import { useState } from 'react';

import { BackdropFilter, IconButton } from '@components/atoms';
import colors from '@constants/colors';
import { useWishListEditStore } from '@stores/wishListStore';

type ImageWithCheckProps = {
	src: string;
	alt: string;
	id: number;
};

const ImageWithCheck = ({ src, alt, id }: ImageWithCheckProps) => {
	const [isChecked, setIsChecked] = useState(false);

	const addCheckedItem = useWishListEditStore(state => state.addCheckedItem);
	const deleteCheckedItem = useWishListEditStore(
		state => state.deleteCheckedItem,
	);

	const handleChangeCheck = () => {
		if (isChecked) {
			deleteCheckedItem(id);
		} else {
			addCheckedItem(id);
		}
		setIsChecked(prev => !prev);
	};

	return (
		<div
			className="relative rounded-[5px] overflow-hidden w-full aspect-square"
			onClick={handleChangeCheck}
		>
			<img src={src} alt={alt} className="w-full aspect-square object-cover" />
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
