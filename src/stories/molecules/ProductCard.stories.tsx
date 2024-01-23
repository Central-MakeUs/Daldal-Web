import { ProductCard } from '@components/molecules';

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

export const Small: Story = {
	args: {
		thumbnail: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		paybackPrice: 200000,
		size: 'small',
		type: 'default',
	},
};

export const Medium: Story = {
	args: {
		thumbnail: 'https://via.placeholder.com/150',
		title:
			'바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩',
		price: 10000,
		paybackPrice: 200000,
		size: 'medium',
		type: 'default',
	},
};

export const Large: Story = {
	args: {
		thumbnail: 'https://via.placeholder.com/150',
		title:
			'바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩 바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩 바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩 바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩',
		price: 10000,
		paybackPrice: 200000,
		size: 'large',
		type: 'default',
	},
};
