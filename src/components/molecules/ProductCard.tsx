import CardInfo from '@components/atoms/card/CardInfo';
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
	type,
	paybackPrice,
	isFullHeart,
	size,
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

	const stylesBySize = {
		small: {
			containerGap: 'gap-1',
		},
		medium: {
			containerGap: 'gap-1',
		},
		large: {
			containerGap: 'gap-5',
		},
	};

	return (
		<div className={`flex flex-col ${stylesBySize[size].containerGap}`}>
			{Image[type]}
			<CardInfo
				title={title}
				price={price}
				paybackPrice={paybackPrice}
				size={size}
			/>
		</div>
	);
};

export default ProductCard;
