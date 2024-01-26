import iconsSvg from '@assets/icons/icons.svg';
import SvgIcon from '@type/svgIcon';

const SvgIcon = ({ id, color = 'none', size, width, height }: SvgIcon) => (
	<svg fill={color} width={size || width} height={size || height}>
		<use href={`${iconsSvg}#${id}`} />
	</svg>
);

export default SvgIcon;
