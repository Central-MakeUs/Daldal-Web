import { ImageSliderContainer } from '@components/organisms';
import { mockImages } from '@mocks/images';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'organisms/ImageSliderContainer',
	component: ImageSliderContainer,
	parameters: {
		layout: 'fullscreen',
	},
} satisfies Meta<typeof ImageSliderContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		images: mockImages,
	},
};
