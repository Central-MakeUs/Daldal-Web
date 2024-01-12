import BackHeader from '@components/organisms/headers/backHeaders/BackHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/headers/backHeaders/BackHeader',
	component: BackHeader,
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
	tags: ['autoDocs'],
} satisfies Meta<typeof BackHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
