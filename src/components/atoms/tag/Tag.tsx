import dynamicBgColor from '@constants/dynamicTailwind/dynamicBgColor';
import dynamicTextColor from '@constants/dynamicTailwind/dynamicTextColor';
import ColorKey from '@type/colorKey';

type TagProps = {
	title: string;
	colors: {
		bgColor: ColorKey;
		textColor: ColorKey;
	};
	size: 'small' | 'large';
};

const TagTypography = {
	small: 'typography-Caption2',
	large: 'typography-Body4 typography-R',
};

const Tag = ({ title, colors, size }: TagProps) => {
	return (
		<div
			className={`flex justify-center items-center px-3 py-1 rounded-[38px] ${
				TagTypography[size]
			} ${dynamicTextColor[colors.textColor]} ${
				dynamicBgColor[colors.bgColor]
			}`}
		>
			{title}
		</div>
	);
};

export default Tag;
