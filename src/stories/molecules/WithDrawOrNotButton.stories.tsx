import { WithdrawOrNotButton } from '@components/molecules';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'molecules/WithdrawOrNotButton',
	component: WithdrawOrNotButton,
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
} satisfies Meta<typeof WithdrawOrNotButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
