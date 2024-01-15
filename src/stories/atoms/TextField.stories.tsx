import type { Meta, StoryObj } from '@storybook/react';
import Form from '@components/atoms/Form/TextField';
import * as z from 'zod';
import { schema } from '@type/form';

const FormWrapper = () => {
	const onSubmit = (data: z.infer<typeof schema>) => {
		console.log(data);
	};

	return (
		<Form onSubmit={onSubmit}>
			<Form.Label label="유저" />
			<Form.Input name="USER" type="text" />
			<Form.HelperText name="USER" />
			<Form.Label label="은행" />
			<Form.BankButton />
			<Form.Label label="계좌번호" />
			<Form.Input name="ACCOUNT" type="number" />
			<Form.HelperText name="ACCOUNT" />
			<Form.Label label="포인트" />
			<Form.PointInput name="POINT" />
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
		backgrounds: {
			default: 'dark',
		},
	},
	tags: ['autodocs'],
	decorators: [],
} satisfies Meta<typeof FormWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
