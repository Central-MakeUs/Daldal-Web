import LogoWithLikeNumHeader from '@components/organisms/headers/logoHeaders/LogoWithLikeNumHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/headers/logoHeaders/LogoWithLikeNumHeader',
	component: LogoWithLikeNumHeader,
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
} satisfies Meta<typeof LogoWithLikeNumHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
