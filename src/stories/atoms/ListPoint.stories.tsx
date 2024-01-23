import { ListPoint } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/ListPoint',
	component: ListPoint,
	parameters: {
		layout: 'centerd',
	},
	tags: ['autodocs'],
	argTypes: {
		date: {
			control: {
				type: 'text',
			},
		},
	},
} satisfies Meta<typeof ListPoint>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		date: '2023.12.23',
		point: '200',
	},
};
