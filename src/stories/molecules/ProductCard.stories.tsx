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
		thumbnailUrl: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		refund: 200000,
		size: 'medium',
		type: 'default',
		id: 1,
		isDib: false,
	},
};

export const Checkbox: Story = {
	args: {
		thumbnailUrl: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		refund: 200000,
		size: 'medium',
		type: 'checkbox',
		id: 1,
		isDib: false,
	},
};

export const Heart: Story = {
	args: {
		thumbnailUrl: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		refund: 200000,
		size: 'medium',
		type: 'heart',
		id: 1,
		isDib: false,
	},
};

export const Small: Story = {
	args: {
		thumbnailUrl: 'https://via.placeholder.com/150',
		title: 'title',
		price: 10000,
		refund: 200000,
		size: 'small',
		type: 'default',
		id: 1,
		isDib: false,
	},
};

export const Medium: Story = {
	args: {
		thumbnailUrl: 'https://via.placeholder.com/150',
		title:
			'바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩',
		price: 10000,
		refund: 200000,
		size: 'medium',
		type: 'default',
		id: 1,
		isDib: false,
	},
};

export const Large: Story = {
	args: {
		thumbnailUrl: 'https://via.placeholder.com/150',
		title:
			'바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩 바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩 바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩 바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩',
		price: 10000,
		refund: 200000,
		size: 'large',
		type: 'default',
		id: 1,
		isDib: false,
	},
};
