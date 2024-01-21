import PaybackPrice from '@components/atoms/card/PaybackPrice';
import { getPriceText } from '@utils/formatData';

type CardInfoProps = {
	title: string;
	price: number;
	paybackPrice: number;
	size: 'small' | 'medium' | 'large';
	category?: string;
};

const CardInfo = ({
	title,
	price,
	paybackPrice,
	size,
	category,
}: CardInfoProps) => {
	const stylesBySize = {
		small: {
			title: 'typography-Body4 typography-M line-clamp-1',
			price: 'typography-Body2 typography-M',
			pricesContainer: 'flex flex-col gap-1',
		},
		medium: {
			title: 'typography-Body3 typography-M line-clamp-1',
			price: 'typography-Body1 typography-M',
			pricesContainer: 'flex flex-col gap-1',
		},
		large: {
			title: 'typography-Body1 typography-R',
			price: 'typography-Subhead',
			pricesContainer: 'flex gap-6',
		},
	};

	const renderCategory = () => {
		if (!category) {
			return null;
		}

		return (
			<span className="typography-Body4 typography-R text-Secondary_B">
				{category}
			</span>
		);
	};

	return (
		<div className="flex flex-col text-White">
			{renderCategory()}
			<span className={stylesBySize[size].title}>{title}</span>
			<div className={stylesBySize[size].pricesContainer}>
				<span className={stylesBySize[size].price}>{getPriceText(price)}</span>
				<PaybackPrice paybackPrice={paybackPrice} size={size} />
			</div>
		</div>
	);
};

export default CardInfo;
