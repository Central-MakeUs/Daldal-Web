import LogoWithNoMenuHeader from '@components/organisms/headers/logoHeaders/LogoWithNoMenuHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/headers/logoHeaders/LogoWithNoMenuHeader',
	component: LogoWithNoMenuHeader,
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
} satisfies Meta<typeof LogoWithNoMenuHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
