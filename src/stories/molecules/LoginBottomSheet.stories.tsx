import LoginBottomSheet from '@components/molecules/LoginBottomSheet';
import { useBottomSheetStore } from '@stores/layerStore';
import { Meta, StoryObj } from '@storybook/react';

const Wrapper = () => {
	const { openBottomSheet } = useBottomSheetStore();

	return (
		<div className="w- h-full">
			<button onClick={() => openBottomSheet('login')}>open</button>
			<LoginBottomSheet />
		</div>
	);
};

const meta = {
	title: 'molecules/LoginBottomSheet',
	component: Wrapper,
	decorators: [Story => <Story />],
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof LoginBottomSheet>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
