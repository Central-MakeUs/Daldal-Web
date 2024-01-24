import { ListPoint } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/ListPoint',
	component: ListPoint,
	parameters: {
		layout: 'centerd',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ListPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		uploadTime: '2023.12.23',
		refund: '200',
		buyId: 4,
		refundStatus: '승인',
	},
};
