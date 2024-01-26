import { SvgIcon } from '..';

type SpeechBubbleProps = {
	text: string;
};

const SpeechBubble = ({ text }: SpeechBubbleProps) => {
	return (
		<div className="relative inline-flex items-center">
			<div className="relative inline-flex px-6 py-1.5 bg-White rounded-[52px] shadow-[0_0_8.1px_0_rgba(255,255,255,0.8)]">
				{text}
			</div>
			<div className="absolute top-[-8px] left-1/2 transform -translate-x-1/2">
				<SvgIcon id="triangle" width={14} height={11} />
			</div>
		</div>
	);
};

export default SpeechBubble;
