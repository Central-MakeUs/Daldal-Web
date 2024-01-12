import BackWithLikeNumHeader from '@components/organisms/headers/backHeaders/BackWithLikeNumHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/headers/backHeaders/BackWithLikeNumHeader',
	component: BackWithLikeNumHeader,
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
	tags: ['autoDocs'],
} satisfies Meta<typeof BackWithLikeNumHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
