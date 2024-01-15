import CaptionButton from '@components/atoms/CaptionButton';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/CaptionButton',
	component: CaptionButton,
	decorators: [
		Story => (
			<div className="w-96">
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
} satisfies Meta<typeof CaptionButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		mainText: '포인트 출금하기',
		caption: '1,000원 이상부터  출금 가능',
	},
};
