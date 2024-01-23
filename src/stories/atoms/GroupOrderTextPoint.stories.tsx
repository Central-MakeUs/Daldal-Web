import { GroupOrderTextPoint } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/GroupOrderTextPoint',
	component: GroupOrderTextPoint,
	parameters: {
		layout: 'centered',
	},
	tags: ['autoDocs'],
} satisfies Meta<typeof GroupOrderTextPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		point: '1000',
	},
};
