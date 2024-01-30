import { KeyValueContainer } from '@components/atoms';

type DefaultKeyValueContainerProps = {
	title: string;
	value: string;
};

const DefaultKeyValueContainer = ({
	title,
	value,
}: DefaultKeyValueContainerProps) => {
	const renderTextValue = (text: string) => (
		<h2 className={`typography-Subhead text-White`}>{text}</h2>
	);

	return <KeyValueContainer title={title} value={renderTextValue(value)} />;
};

export default DefaultKeyValueContainer;
