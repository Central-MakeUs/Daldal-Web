import Tag from './Tag';

const NotApprovedTag = () => (
	<Tag
		title="미승인"
		colors={{
			bgColor: 'Error',
			textColor: 'Black',
		}}
		size="small"
	/>
);

export default NotApprovedTag;
