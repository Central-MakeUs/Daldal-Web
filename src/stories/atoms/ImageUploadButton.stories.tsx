import ImageUploadButton from '@components/atoms/ImageUploadButton';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/ImageUploadButton',
	component: ImageUploadButton,
	decorators: [
		Story => (
			<div style={{ width: '101px' }}>
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
} satisfies Meta<typeof ImageUploadButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
