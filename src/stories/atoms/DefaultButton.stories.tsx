import DefaultButton from '@components/atoms/DefaultButton';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/DefaultButton',
	component: DefaultButton,
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
	tags: ['autodocs'],
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const KakaoTalk: Story = {
	args: {
		iconId: 'kakaoTalk',
		color: {
			bgColor: 'Kakao',
			textColor: 'Black',
		},
		title: '카카오톡으로 계속하기',
	},
};

export const ShoppingContained: Story = {
	args: {
		color: {
			bgColor: 'White',
			textColor: 'Black',
		},
		title: '쇼핑하러 가기',
	},
};

export const ShoppingDisabled: Story = {
	args: {
		color: {
			bgColor: 'Gray70',
			textColor: 'Gray20',
		},
		title: '쇼핑하러 가기',
	},
};

export const ShoppingOutlined: Story = {
	args: {
		color: {
			bgColor: 'Black',
			textColor: 'Gray20',
		},
		title: '쇼핑하러 가기',
	},
};
