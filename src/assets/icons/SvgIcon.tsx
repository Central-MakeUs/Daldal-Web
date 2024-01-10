import iconsSvg from '@assets/icons/icons.svg';
import svgIcon from '@type/svgIcon';

const SvgIcon = ({ id, color, size, width, height }: svgIcon) => (
	<svg fill={color} width={size || width} height={size || height}>
		<use href={`${iconsSvg}#${id}`} />
	</svg>
);

export default SvgIcon;
