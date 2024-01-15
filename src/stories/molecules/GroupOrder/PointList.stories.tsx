import PointList from '@components/molecules/groupOrder/PointList';
import { NEXT_MONTH_POINT_LIST, THIS_MONTH_POINT_LIST } from '@mocks/pointList';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'molecules/GroupOrder/PointList',
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
	args: THIS_MONTH_POINT_LIST,
};

export const NextMonth: Story = {
	args: NEXT_MONTH_POINT_LIST,
};
