import { getPriceText } from '@utils/formatData';

type PaybackPriceProps = {
	size: 'small' | 'medium' | 'large';
	paybackPrice: number;
};

const PaybackPrice = ({ size, paybackPrice }: PaybackPriceProps) => {
	const classNameBySize = {
		small: 'typography-Caption1 xs:typography-Body4 typography-M gap-1',
		medium: 'typography-Body2 typography-M gap-2',
		large: 'typography-Body1 typography-SB gap-2',
	};
	return (
		<div className="flex items-center gap-1">
			<span className="xs:typography-Caption1 typography-Caption2 text-White bg-Primary px-1 py-[2px] rounded-sm">
				예상 환급액
			</span>
			<span className={`${classNameBySize[size]} text-Primary`}>
				{getPriceText(paybackPrice)}
			</span>
		</div>
	);
};

export default PaybackPrice;
