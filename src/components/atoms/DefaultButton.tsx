import SvgIcon from '@components/common/SvgIcon';
import dynamicKColor from '@constants/dynamicTailwind/dynamicKColor';
import dynamicTextColor from '@constants/dynamicTailwind/dynamicTextColor';
import { IconId } from '@type/svgIcon';
import { Button } from 'konsta/react';

type DefaultButtonProps = {
	iconId?: IconId;
	title: string;
	color: {
		bgColor: 'Kakao' | 'White' | 'Gray70' | 'Black';
		textColor: 'Black' | 'Gray20' | 'White';
	};
	onClick: () => void;
};

const DefaultButton = ({
	iconId,
	title,
	color,
	onClick,
}: DefaultButtonProps) => {
	return (
		<Button
			className={`w-full !h-12 text-base font-semibold flex rounded !py-[14px] ${
				iconId ? 'gap-6 justify-center items-center' : 'text-center'
			} ${
				color.bgColor === 'Black' &&
				'!border-[1px] !border-solid !border-Gray50 k-color-Black'
			} ${dynamicKColor[color.bgColor]} ${dynamicTextColor[color.textColor]}`}
			onClick={onClick}
		>
			{iconId && <SvgIcon id={iconId} width={22} height={20} />}
			{title}
		</Button>
	);
};

export default DefaultButton;
