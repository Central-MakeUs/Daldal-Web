import type { Meta, StoryObj } from '@storybook/react';

import SearchTextField from '@components/atoms/SearchTextField';

const meta = {
	title: 'Atoms/SearchTextField',
	component: SearchTextField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
} satisfies Meta<typeof SearchTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const IsFocused: Story = {
	args: {
		isFocused: true,
	},
};