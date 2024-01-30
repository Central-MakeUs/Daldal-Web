import { ReactNode } from 'react';

type KeyValueContainerProps = {
	title: string;
	value: ReactNode;
	row?: boolean;
};

const KeyValueContainer = ({
	title,
	value,
	row = true,
}: KeyValueContainerProps) => {
	const contentsStyle = row
		? 'flex justify-between items-center'
		: 'flex flex-col gap-[13px]';

	return (
		<div className={`w-full ${contentsStyle}`}>
			<h3 className="typography-Body2 typography-R text-Gray20">{title}</h3>
			{value}
		</div>
	);
};

export default KeyValueContainer;
