import { Tag } from '@components/atoms';

import { StatusTagProps } from './ApprovedTag';

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
