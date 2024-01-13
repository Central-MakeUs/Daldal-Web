import type { Meta, StoryObj } from '@storybook/react';
import Form from '@components/atoms/Form/TextField';
import * as z from 'zod';

const FormWrapper = () => {
	const onSubmit = (data: any) => {
		console.log(data);
	};

	const schema = z.object({
		USER: z
			.string({ required_error: '필수 입력 사항입니다.' })
			.max(10, '10 글자 이하로 입력해주세요.'),
		BANK: z.string({ required_error: '필수 입력 사항입니다.' }),
		ACCOUNT: z
			.string({
				required_error: '필수 입력 사항입니다.',
			})
			.regex(/^[0-9]+$/, '숫자만 입력해주세요.')
			.max(12, '16 글자 이하로 입력해주세요.'),
		POINT: z
			.string({ required_error: '필수 입력 사항입니다.' })
			.regex(/^[0-9]+$/, '숫자만 입력해주세요.')
			.max(12, '12 글자 이하로 입력해주세요.'),
	});

	return (
		<Form onSubmit={onSubmit} schema={schema}>
			<Form.Label label="유저" />
			<Form.Input name="USER" type="text" />
			<Form.HelperText name="USER" />
			<Form.Label label="은행" />
			<Form.Input name="BANK" />
			<Form.HelperText name="BANK" />
			<Form.Label label="계좌번호" />
			<Form.Input name="ACCOUNT" />
			<Form.HelperText name="ACCOUNT" />
			<Form.Label label="포인트" />
			<Form.Input name="POINT" />
			<Form.HelperText name="POINT" />
			<Form.Button>Submit</Form.Button>
		</Form>
	);
};

const meta = {
	title: 'atoms/TextField',
	component: FormWrapper,
	parameters: {
		layout: 'centerd',
	},
	tags: ['autodocs'],
	decorators: [],
} satisfies Meta<typeof FormWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
