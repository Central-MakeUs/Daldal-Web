import { CategoryButton } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/myPage/CategoryButton',
	component: CategoryButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	decorators: [
		storyFn => (
			<div className="flex flex-col items-center w-160">{storyFn()}</div>
		),
	],
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
