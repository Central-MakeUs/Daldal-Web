import iconsSvg from '@assets/icons/icons.svg';
import SvgIcon from '@type/svgIcon';

const SvgIcon = ({ id, color, size }: SvgIcon) => (
	<svg fill={color} width={size} height={size}>
		<use href={`${iconsSvg}#${id}`} />
	</svg>
);

export default SvgIcon;
