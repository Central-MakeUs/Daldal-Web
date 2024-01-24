type PointHistoryTitleProps = {
	title: string;
	description?: string;
};

const PointHistoryTitle = ({ title, description }: PointHistoryTitleProps) => {
	return (
		<div className="flex flex-col gap-3">
			<span className="typography-Body2 typography-SB text-White">{title}</span>
			<div className="flex flex-col typography-Body4 typography-R text-Gray20 whitespace-pre-line">
				{description}
			</div>
		</div>
	);
};

export default PointHistoryTitle;
