import ImageSlider from '@components/atoms/ImageSlider';
import { mockImages } from '@mocks/images';
import { Meta, StoryObj } from '@storybook/react';

import '@/slick.css';

const meta = {
	title: 'atoms/ImageSlider',
	component: ImageSlider,
	decorators: [
		Story => (
			<div style={{ width: '101px' }}>
				<style>
					{`.dots_custom {
    margin-top: 12px;
    vertical-align: middle;
}

.dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 4px;
    padding: 0;
}

.dots_custom li button {
    border: none;
    background: #5c6271;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
}

.dots_custom li.slick-active button {
    background-color: #fff;
}`}
				</style>
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
} satisfies Meta<typeof ImageSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: mockImages.map((image, idx) => (
			<div key={`Image#${idx}`}>
				<div style={{ position: 'relative', display: 'inline-block' }}>
					<img src={image} alt="Placeholder Image" className="aspect-square" />
				</div>
			</div>
		)),
		totalImageNumber: mockImages.length,
		options: { dots: false, autoplay: false },
		className: 'relative w-[300px]',
	},
};
