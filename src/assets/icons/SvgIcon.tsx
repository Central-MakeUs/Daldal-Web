import iconsSvg from '@assets/icons/icons.svg';
import svgIcon from '@type/svgIcon';

const SvgIcon = ({ id, color, size }: svgIcon) => (
	<svg fill={color} width={size} height={size}>
		<use href={`${iconsSvg}#${id}`} />
	</svg>
);

export default SvgIcon;
