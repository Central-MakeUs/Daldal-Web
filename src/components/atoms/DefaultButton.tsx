import SvgIcon from '@components/common/SvgIcon';
import dynamicKColor from '@constants/dynamicTailwind/dynamicKColor';
import dynamicTextColor from '@constants/dynamicTailwind/dynamicTextColor';
import ColorKey from '@type/colorKey';
import { IconId } from '@type/svgIcon';
import { Button } from 'konsta/react';

type DefaultButtonProps = {
	iconId?: IconId;
	title: string;
	color: {
		bgColor: ColorKey;
		textColor: ColorKey;
	};
	size: 'small' | 'large';
	onClick: () => void;
	disabled?: boolean;
};

const DefaultButton = ({
	iconId,
	title,
	color,
	size,
	onClick,
	disabled = false,
}: DefaultButtonProps) => {
	const height = size === 'large' ? '!h-12' : '!h-[45px]';
	return (
		<Button
			className={`w-full ${height} text-base font-semibold flex rounded ${
				iconId ? 'gap-6 justify-center items-center' : 'text-center'
			} ${
				color.bgColor === 'Black' &&
				'!border-[1px] !border-solid !border-Gray50 k-color-Black'
			} ${dynamicKColor[color.bgColor]} ${dynamicTextColor[color.textColor]}`}
			onClick={onClick}
			disabled={disabled}
			colors={{
				disabledBg: 'bg-Gray70',
			}}
		>
			{iconId && <SvgIcon id={iconId} width={22} height={20} />}
			{title}
		</Button>
	);
};

export default DefaultButton;
