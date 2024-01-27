import { Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import dynamicBorderColor from '@constants/dynamicTailwind/dynamicBorderColor';
import dynamicKColor from '@constants/dynamicTailwind/dynamicKColor';
import dynamicTextColor from '@constants/dynamicTailwind/dynamicTextColor';
import ColorKey from '@type/colorKey';
import svgIcon from '@type/svgIcon';

type DefaultButtonProps = {
	icon: svgIcon;
	title: string;
	color: {
		bgColor: ColorKey;
		textColor: ColorKey;
		borderColor?: ColorKey;
	};
	size: 'small' | 'large';
	onClick?: () => void;
	disabled?: boolean;
	className?: string;
};

const DefaultButton = ({
	icon,
	title,
	color,
	size,
	onClick,
	disabled = false,
	className,
}: DefaultButtonProps) => {
	const height = size === 'large' ? '!h-12' : '!h-[45px]';

	return (
		<Button
			className={`w-full ${height} !typography-Btn_text1 flex rounded ${
				icon.id ? 'gap-6 justify-center items-center' : 'text-center'
			} ${
				color.bgColor === 'Black' &&
				'!border-[1px] !border-solid !border-Gray50 k-color-Black'
			} ${
				color.borderColor &&
				`!border-[1px] !border-solid ${dynamicBorderColor[color.borderColor]}`
			} ${dynamicKColor[color.bgColor]} ${
				dynamicTextColor[color.textColor]
			} ${className}`}
			onClick={onClick}
			disabled={disabled}
			colors={{
				disabledBg: 'bg-Gray70',
			}}
		>
			{icon.id && (
				<SvgIcon
					id={icon.id}
					color={icon.color ? icon.color : 'none'}
					width={22}
					height={20}
				/>
			)}
			{title}
		</Button>
	);
};

export default DefaultButton;
