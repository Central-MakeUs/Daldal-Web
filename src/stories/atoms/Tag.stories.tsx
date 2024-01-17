import Tag from '@components/atoms/Tag';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/Tag',
	component: Tag,
	decorators: [
		Story => (
			<div style={{ width: '375px' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small_Secondary_G: Story = {
	args: {
		title: '승인',
		colors: {
			bgColor: 'Secondary_G',
			textColor: 'Black',
		},
		size: 'small',
	},
};

export const Small_Secondary_B: Story = {
	args: {
		title: '진행중',
		colors: {
			bgColor: 'Secondary_B',
			textColor: 'Black',
		},
		size: 'small',
	},
};

export const Small_Error: Story = {
	args: {
		title: '미승인',
		colors: {
			bgColor: 'Error',
			textColor: 'Black',
		},
		size: 'small',
	},
};

export const Large: Story = {
	args: {
		title: '반폴라 캐시미어',
		colors: {
			bgColor: 'Gray20',
			textColor: 'White',
		},
		size: 'large',
	},
};
