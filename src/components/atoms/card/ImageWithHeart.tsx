import IconButton from '@components/atoms/button/IconButton';
import colors from '@constants/colors';

type ImageWithCheckProps = {
	src: string;
	alt: string;
	isFullHeart?: boolean;
	handleClickHeart: () => void;
};

const ImageWithHeart = ({
	src,
	alt,
	handleClickHeart,
	isFullHeart = false,
}: ImageWithCheckProps) => {
	return (
		<div className="relative rounded-[5px] overflow-hidden w-full aspect-square">
			<img src={src} alt={alt} className="w-full h-full" />
			<IconButton
				icon={{
					id: isFullHeart ? 'like-full' : 'like-empty',
					width: 24,
					color: colors.Primary,
				}}
				onClick={handleClickHeart}
				className="!w-fit absolute top-1 right-1 z-10"
			/>
		</div>
	);
};

export default ImageWithHeart;
