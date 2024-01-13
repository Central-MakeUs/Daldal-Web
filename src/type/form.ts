import * as z from 'zod';

export const schema = z.object({
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
		.max(12, '12 글자 이하로 입력해주세요.'),
});

export type FormType = z.infer<typeof schema>;
export type FormName = keyof FormType;
