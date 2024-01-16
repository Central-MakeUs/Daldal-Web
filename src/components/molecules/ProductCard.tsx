import ImageWithCheck from '@components/atoms/card/ImageWithCheck';
import ImageWithHeart from '@components/atoms/card/ImageWithHeart';

type ProductCardProps = {
	thumbnail: string;
	title: string;
	price: number;
	paybackPrice: number;
	size: 'small' | 'medium' | 'large';
	type: 'default' | 'checkbox' | 'heart';
	isFullHeart?: boolean;
};

const ProductCard = ({
	thumbnail,
	title,
	price,
	paybackPrice,
	type,
	isFullHeart,
}: ProductCardProps) => {
	const Image = {
		checkbox: <ImageWithCheck src={thumbnail} alt={title} />,
		default: (
			<img
				src={thumbnail}
				alt={title}
				className="w-full h-full rounded-[5px]"
			/>
		),
		heart: (
			<ImageWithHeart
				src={thumbnail}
				alt={title}
				isFullHeart={isFullHeart}
				handleClickHeart={() => {
					console.log('heart');
				}}
			/>
		),
	};

	const renderCardImage = () => {
		return Image[type];
	};

	return (
		<div>
			{renderCardImage()}
			<div>
				<div>{title}</div>
				<div>{price}</div>
				<div>{paybackPrice}</div>
			</div>
		</div>
	);
};

export default ProductCard;
