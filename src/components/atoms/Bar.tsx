type BarProps = {
	animationDuration: number;
	progress: number;
};

const Bar = ({ animationDuration, progress }: BarProps) => (
	<div
		className="bg-Primary w-full fixed top-0 left-0 h-1 z-50 transition-margin-left ease-linear"
		style={{
			marginLeft: `${(-1 + progress) * 100}%`,
			transitionDuration: `${animationDuration}ms`,
		}}
	>
		<div className="absolute block right-0 h-full opacity-100 w-[100px] transform rotate-3 translate-y-[-4px] shadow-[0_0_10px_rgb(255,97,122,1),0_0_5px_rgb(255,97,122,1)]" />
	</div>
);

export default Bar;
