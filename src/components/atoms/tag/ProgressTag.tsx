import { Tag } from '@components/atoms';

import { StatusTagProps } from './ApprovedTag';

const ProgressTag = ({ size }: StatusTagProps) => (
	<Tag
		title="진행중"
		colors={{
			bgColor: 'Secondary_B',
			textColor: 'Black',
		}}
		size={size}
	/>
);

export default ProgressTag;
