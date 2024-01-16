import PaybackPrice from '@components/atoms/card/PaybackPrice';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/card/PaybackPrice',
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
		paybackPrice: 200000,
		size: 'medium',
	},
};
