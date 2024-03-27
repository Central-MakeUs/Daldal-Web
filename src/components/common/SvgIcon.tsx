import svgIcon from '@type/svgIcon';

const SvgIcon = ({ id, color = 'none', size, width, height }: svgIcon) => (
	<svg fill={color} width={size || width} height={size || height}>
		<use href={`#${id}`} />
	</svg>
);

export default SvgIcon;
