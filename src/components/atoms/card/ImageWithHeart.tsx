import IconButton from '@components/atoms/button/IconButton';
import colors from '@constants/colors';

type ImageWithCheckProps = {
	src: string;
	alt: string;
	size: number;
	isHeart: boolean;
	handleClickHeart: () => void;
	handleShowDetailProduct: () => void;
};

const ImageWithCheck = ({
	src,
	alt,
	handleClickHeart,
	size,
	isHeart,
	handleShowDetailProduct,
}: ImageWithCheckProps) => {
	const handleClickHeartWithStopPropagation = () => {
		handleClickHeart();
	};

	return (
		<div
			className="relative rounded-[5px] overflow-hidden"
			onClick={handleShowDetailProduct}
		>
			<img src={src} alt={alt} width={size} height={size} />
			<IconButton
				icon={{
					id: isHeart ? 'like-full' : 'like-empty',
					width: 24,
					color: colors.Primary,
				}}
				onClick={handleClickHeartWithStopPropagation}
				className="w-fit absolute top-1 right-1 z-10"
			/>
		</div>
	);
};

export default ImageWithCheck;
