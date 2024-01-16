import { getPriceText } from '@utils/formatData';

type PaybackPriceProps = {
	size: 'small' | 'medium' | 'large';
	price: number;
};

const PaybackPrice = ({ size, price }: PaybackPriceProps) => {
	return (
		<div>
			<span>예상 환금액</span>
			<span>{getPriceText(price)}</span>
		</div>
	);
};

export default PaybackPrice;
