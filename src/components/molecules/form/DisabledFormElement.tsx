type DisabledFormElementProps = {
	label: string;
	value: string | number;
};

const DisabledFormElement = ({ label, value }: DisabledFormElementProps) => {
	return (
		<div className="flex flex-col">
			<label className="text-Gray20 typography-Body2 typography-R">
				{label}
			</label>
			<input
				className="w-full my-2 py-1 bg-transparent text-White typography-Subhead"
				value={value}
				disabled
			/>
		</div>
	);
};

export default DisabledFormElement;
