import Header from '@components/organisms/Header';
import { Meta, StoryObj } from '@storybook/react';

type WrapperProps = {
	leftType: 'logo' | 'back';
	rightType: 'default' | 'likeWithNum';
};

const Wrapper = ({ leftType, rightType }: WrapperProps) => (
	<Header>
		<Header.Left leftType={leftType} />
		<Header.Right rightType={rightType} />
	</Header>
);

const meta = {
	title: 'organisms/Header',
	component: Wrapper,
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
} satisfies Meta<typeof Wrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		leftType: 'logo',
		rightType: 'default',
	},
};
