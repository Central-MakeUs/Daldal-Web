import { AccountBottomSheet } from '@components/molecules';
import { useBottomSheetStore } from '@stores/layerStore';
import { Meta, StoryObj } from '@storybook/react';

const Wrapper = () => {
	const { openBottomSheet } = useBottomSheetStore();

	return (
		<div className="h-full">
			<button onClick={() => openBottomSheet('account')}>open</button>
			<AccountBottomSheet />
		</div>
	);
};

const meta = {
	title: 'molecules/bottomSheet/AccountBottomSheet',
	component: Wrapper,
	parameters: {
		layout: 'centered',
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
