import ProductCard from '@components/molecules/ProductCard';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'molecules/ProductCard',
	component: ProductCard,
	parameters: {
		layout: 'centerd',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		thumbnail: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		paybackPrice: 200000,
		size: 'medium',
		type: 'default',
	},
};

export const Checkbox: Story = {
	args: {
		thumbnail: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		paybackPrice: 200000,
		size: 'medium',
		type: 'checkbox',
	},
};

export const Heart: Story = {
	args: {
		thumbnail: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		paybackPrice: 200000,
		size: 'medium',
		type: 'heart',
	},
};
