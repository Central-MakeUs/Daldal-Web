import Tag from './Tag';

export type StatusTagProps = {
	size: 'small' | 'large';
};

const ApprovedTag = ({ size }: StatusTagProps) => (
	<Tag
		title="승인"
		colors={{
			bgColor: 'Secondary_G',
			textColor: 'Black',
		}}
		size={size}
	/>
);

export default ApprovedTag;
