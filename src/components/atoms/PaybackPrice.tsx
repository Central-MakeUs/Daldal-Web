import { getPriceText } from '@utils/formatData';

type PaybackPriceProps = {
	size: 'small' | 'medium' | 'large';
	price: number;
};

const PaybackPrice = ({ size, price }: PaybackPriceProps) => {
	const classNameBySize = {
		small: 'typography-Body4 typography-M gap-1',
		medium: 'typography-Body2 typography-M gap-2',
		large: 'typography-Body1 typography-SB gap-2',
	};
	return (
		<div className={`flex items-center ${classNameBySize[size]} text-Primary`}>
			<span className="typography-Caption1 text-White bg-Primary px-1 py-[2px] rounded-sm">
				예상 환금액
			</span>
			<span className={`text-Primary`}>{getPriceText(price)}</span>
		</div>
	);
};

export default PaybackPrice;
