import { PointList } from '@components/molecules';
import {
	mockCurrentPointHistory,
	mockPastPointHistory,
} from '@mocks/pointList';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'molecules/groupOrder/PointList',
	component: PointList,
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
} satisfies Meta<typeof PointList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThisMonth: Story = {
	args: mockCurrentPointHistory,
};

export const NextMonth: Story = {
	args: mockPastPointHistory,
};
