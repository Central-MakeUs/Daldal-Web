import { Button } from 'konsta/react';

type CaptionButtonProps = {
	mainText: string;
	caption: string;
	disabled?: boolean;
	onClick?: () => void;
};

const CaptionButton = ({
	mainText,
	caption,
	disabled = false,
	onClick,
}: CaptionButtonProps) => {
	return (
		<Button
			className="k-color-Primary flex flex-col !h-15"
			colors={{
				disabledBg: 'bg-Gray20',
			}}
			disabled={disabled}
			onClick={onClick}
		>
			<span className="typography-Body2 typography-SB text-White">
				{mainText}
			</span>
			<span className="typography-Body4 typography-R text-White">
				{caption}
			</span>
		</Button>
	);
};

export default CaptionButton;
