import LogoHeader from '@components/organisms/headers/logoHeaders/LogoHeader';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/headers/logoHeaders/LogoHeader',
	component: LogoHeader,
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
} satisfies Meta<typeof LogoHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
