import Header from '@components/organisms/Header';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/Header',
	component: Header,
	decorators: [
		Story => (
			<div style={{ width: '375px' }}>
				<Story />
			</div>
		),
	],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LogoDefault: Story = {
	args: {
		leftType: 'logo',
	},
};

export const BackDefault: Story = {
	args: {
		leftType: 'back',
	},
};

export const HomeDefault: Story = {
	args: {
		leftType: 'home',
	},
};
