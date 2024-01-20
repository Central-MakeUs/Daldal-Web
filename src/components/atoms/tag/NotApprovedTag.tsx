import { StatusTagProps } from './ApprovedTag';
import Tag from './Tag';

const NotApprovedTag = ({ size }: StatusTagProps) => (
	<Tag
		title="미승인"
		colors={{
			bgColor: 'Error',
			textColor: 'Black',
		}}
		size={size}
	/>
);

export default NotApprovedTag;
