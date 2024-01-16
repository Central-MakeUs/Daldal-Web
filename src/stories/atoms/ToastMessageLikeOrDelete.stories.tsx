import ToastMessageLikeOrDelete from '@components/atoms/ToastMessageLikeOrDelete';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/ToastMessageLikeOrDelete',
	component: ToastMessageLikeOrDelete,
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
} satisfies Meta<typeof ToastMessageLikeOrDelete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddLike: Story = {
	args: {
		like: true,
	},
};

export const DeleteLike: Story = {
	args: {
		like: false,
	},
};
