// import { IconButton } from '@components/atoms';
// import colors from '@constants/colors';

import { HeartButton } from '@components/atoms';

type ImageWithCheckProps = {
	src: string;
	alt: string;
	id: number;
	isDib: boolean;
};

const ImageWithHeart = ({ src, alt, id, isDib }: ImageWithCheckProps) => {
	return (
		<div className="relative rounded-[5px] overflow-hidden w-full aspect-square">
			<img src={src} alt={alt} className="w-full h-full" />
			<HeartButton
				id={id}
				isDib={isDib}
				size={24}
				className="!w-fit !h-fit absolute top-1 right-1 z-10 !p-0"
			/>
		</div>
	);
};

export default ImageWithHeart;
