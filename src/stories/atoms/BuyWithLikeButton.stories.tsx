import { BuyWithLikeButton } from '@components/atoms';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/BuyWithLikeButton',
	component: BuyWithLikeButton,
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
} satisfies Meta<typeof BuyWithLikeButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LikeOn: Story = {
	args: {
		isDib: true,
	},
};

export const LikeOff: Story = {
	args: {
		isDib: false,
	},
};
