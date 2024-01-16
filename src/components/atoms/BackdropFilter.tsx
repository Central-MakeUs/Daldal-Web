type BackdropFilterProps = {
	isOverlayNeeded: boolean;
};

const BackdropFilter = ({ isOverlayNeeded }: BackdropFilterProps) => {
	if (isOverlayNeeded) {
		return (
			<div className="absolute bottom-0 left-0 w-full h-full bg-black opacity-50" />
		);
	}

	return null;
};

export default BackdropFilter;
