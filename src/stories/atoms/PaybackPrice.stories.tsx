import PaybackPrice from '@components/atoms/PaybackPrice';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/PaybackPrice',
	component: PaybackPrice,
	parameters: {
		layout: 'centerd',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof PaybackPrice>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		price: 200000,
		size: 'medium',
	},
};
