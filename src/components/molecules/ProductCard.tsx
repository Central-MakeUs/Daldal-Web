import ImageWithCheck from '@components/atoms/card/ImageWithCheck';
import ImageWithHeart from '@components/atoms/card/ImageWithHeart';
import PaybackPrice from '@components/atoms/card/PaybackPrice';
import { getPriceText } from '@utils/formatData';

type ProductCardProps = {
	thumbnail: string;
	title: string;
	price: number;
	paybackPrice: number;
	size: 'small' | 'medium' | 'large';
	type: 'default' | 'checkbox' | 'heart';
	isFullHeart?: boolean;
	category?: string;
};

const ProductCard = ({
	thumbnail,
	title,
	price,
	paybackPrice,
	type,
	isFullHeart,
	size,
	category,
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
			title: 'typography-Body4 typography-M line-clamp-1',
			price: 'typography-Body2 typography-M',
			pricesContainer: 'flex flex-col gap-1',
			containerGap: 'gap-1',
		},
		medium: {
			title: 'typography-Body3 typography-M line-clamp-1',
			price: 'typography-Body1 typography-M',
			pricesContainer: 'flex flex-col gap-1',
			containerGap: 'gap-1',
		},
		large: {
			title: 'typography-Body1 typography-R line-clamp-2',
			price: 'typography-Subhead',
			pricesContainer: 'flex gap-6',
			containerGap: 'gap-5',
		},
	};

	const renderCategory = () => {
		if (category) {
			return (
				<span className="typography-Body4 typography-R text-Secondary_B">
					{category}
				</span>
			);
		}
		return null;
	};

	return (
		<div
			className={`flex flex-col ${stylesBySize[size].containerGap} text-White`}
		>
			{Image[type]}
			<div>
				{renderCategory()}
				<span className={stylesBySize[size].title}>{title}</span>
				<div className={stylesBySize[size].pricesContainer}>
					<span className={stylesBySize[size].price}>
						{getPriceText(price)}
					</span>
					<PaybackPrice paybackPrice={paybackPrice} size={size} />
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
