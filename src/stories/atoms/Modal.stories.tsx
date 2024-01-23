import { DefaultButton, Modal } from '@components/atoms';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
	title: 'atoms/Modal',
	component: Modal,
	parameters: {
		layout: 'centerd',
	},
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: '작성 중인 내용이 있습니다.\n나가시겠습니까?',
		description: `해당 페이지를 벗어날 경우,\n지금까지 작성한 내용이 사라집니다.`,
		buttons: [
			<DefaultButton
				color={{
					textColor: 'White',
					bgColor: 'Primary',
				}}
				title="머무르기"
				size="small"
				onClick={() => console.log('머무르기 클릭')}
			/>,
			<DefaultButton
				title="이동하기"
				size="small"
				color={{
					textColor: 'Primary',
					bgColor: 'White',
					borderColor: 'Primary',
				}}
				onClick={() => console.log('이동하기 클릭')}
			/>,
		],
	},
};
