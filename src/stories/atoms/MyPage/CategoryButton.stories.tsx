import type { Meta, StoryObj } from '@storybook/react';

import CategoryButton from '@components/atoms/MyPage/CategoryButton';

const meta = {
	title: 'Components/atoms/MyPage/CategoryButton',
	component: CategoryButton,
	parameters: {
		layout: 'centered',
	},
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: '카테고리',
	},
};

export const Like: Story = {
	args: {
		title: '카테고리',
		iconId: 'like-full',
	},
};

export const Point: Story = {
	args: {
		title: '카테고리',
		iconId: 'point-paid',
	},
};

export const Person: Story = {
	args: {
		title: '카테고리',
		iconId: 'mypage-person',
	},
};
