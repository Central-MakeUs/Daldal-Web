import type { Meta, StoryObj } from '@storybook/react';

import GroupOrderTextPoint from '@components/atoms/GroupOrderTextPoint';

const meta = {
	title: 'components/atoms/GroupOrderTextPoint',
	component: GroupOrderTextPoint,
	parameters: {
		// More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
	},
	tags: ['autoDocs'],
} satisfies Meta<typeof GroupOrderTextPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		point: 1000,
	},
};
