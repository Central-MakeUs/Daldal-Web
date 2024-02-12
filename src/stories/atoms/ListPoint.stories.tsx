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
		id: 12,
		approvedTime: '2023-12-22T23:16:12:32',
		purchase: 100,
		uploadTime: '2024-02-10T06:36:15.396Z',
		pointsBeforeRefund: 3000,
		pointsAfterRefund: 2000,
		refund: '1000',
		refundStatus: 'WITHDRAWN_REJECTED',
	},
};
