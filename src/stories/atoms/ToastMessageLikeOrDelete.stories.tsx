import { Button } from 'konsta/react';

import { CustomToaster, ToastMessageLikeOrDelete } from '@components/atoms';
import { Meta, StoryObj } from '@storybook/react';
import toast from 'react-hot-toast';

type ContainerType = {
	like: boolean;
};

const Container = ({ like }: ContainerType) => {
	const handleClick = () => {
		toast(() => <ToastMessageLikeOrDelete like={like} />);
	};
	return (
		<>
			<CustomToaster className="px-3" />
			<Button onClick={handleClick}>토스트 메시지 생성</Button>
		</>
	);
};

const meta = {
	title: 'atoms/ToastMessageLikeOrDelete',
	component: Container,
	decorators: [
		Story => (
			<div style={{ width: '375px', height: '500px' }}>
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
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AddLike: Story = {
	args: {
		like: true,
	},
};

export const DeleteLike: Story = {
	args: {
		like: false,
	},
};
