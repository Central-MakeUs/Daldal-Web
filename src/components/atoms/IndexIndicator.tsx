type IndexIndicatorProps = {
	currentIndex: number;
	totalImageNumber: number;
};

const IndexIndicator = ({
	currentIndex,
	totalImageNumber,
}: IndexIndicatorProps) => {
	return (
		<div className="flex items-center gap-1 px-3 py-1 rounded-[65px] bg-black opacity-60">
			<h6 className="text-White text-center text-xs font-semibold ">
				{currentIndex}
			</h6>
			<div className="w-0.5 h-2 bg-Gray20" />
			<h6 className="text-Gray20 text-center typography-Caption1">
				{totalImageNumber}
			</h6>
		</div>
	);
};

export default IndexIndicator;
