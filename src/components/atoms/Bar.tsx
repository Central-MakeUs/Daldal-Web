import colors from '@constants/colors';

type BarProps = {
	animationDuration: number;
	progress: number;
};

const Bar = ({ animationDuration, progress }: BarProps) => (
	<div
		className="bg-Primary w-full fixed top-0 left-0 h-1 z-50 "
		style={{
			marginLeft: `${(-1 + progress) * 100}%`,
			transition: `margin-left ${animationDuration}ms linear`,
		}}
	>
		<div
			className="absolute block right-0 h-full opacity-100 w-[100px]"
			style={{
				boxShadow: `0 0 10px ${colors.Primary}, 0 0 5px ${colors.Primary}`,
				transform: 'rotate(3deg) translate(0px, -4px)',
			}}
		/>
	</div>
);

export default Bar;
