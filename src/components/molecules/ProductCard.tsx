import { ImageWithCheck, ImageWithHeart, CardInfo } from '@components/atoms';
import { ProductSimple } from '@models/product/entity/product';
import { useNavigate } from 'react-router-dom';

interface ProductCardProps extends ProductSimple {
	size: 'small' | 'medium' | 'large';
	type: 'default' | 'checkbox' | 'heart';
}

const ProductCard = ({
	thumbnailUrl,
	title,
	price,
	type,
	refund,
	isDib,
	size,
	id,
}: ProductCardProps) => {
	const navigate = useNavigate();
	const handleCardClick = () => {
		navigate(`/detail/${id}`);
	};

	const Image = {
		checkbox: <ImageWithCheck src={thumbnailUrl} alt={title} id={id} />,
		default: (
			<img
				src={thumbnailUrl}
				alt={title}
				className="w-full h-full rounded-[5px]"
			/>
		),
		heart: (
			<ImageWithHeart
				src={thumbnailUrl}
				alt={title}
				isFullHeart={isDib}
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
		<div
			className={`flex flex-col ${stylesBySize[size].containerGap} cursor-pointer`}
			onClick={type !== 'checkbox' ? handleCardClick : () => {}}
		>
			{Image[type]}
			<CardInfo title={title} price={price} paybackPrice={refund} size={size} />
		</div>
	);
};

export default ProductCard;
