import * as z from 'zod';

export const pointSchema = z.object({
	POINT: z
		.string()
		.min(1, '필수 입력 사항입니다.')
		.transform(value => +value.replace(/[^0-9]/g, ''))
		.refine(value => value < 5000, '최대 금액이 5,000 P에요.')
		.refine(value => value > 1000, '최소 금액이 1,000 P에요.'),
});

export const accountSchema = z.object({
	USER: z
		.string()
		.min(1, '필수 입력 사항입니다.')
		.max(5, '5 글자 이하로 입력해주세요.'),
	BANK: z.string().min(1, '필수 입력 사항입니다.'),
	ACCOUNT: z
		.string()
		.min(1, '필수 입력 사항입니다.')
		.regex(/^[0-9]+$/, '숫자만 입력해주세요.')
		.max(16, '16 글자 이하로 입력해주세요.'),
});

export type FormName =
	| keyof z.infer<typeof pointSchema>
	| keyof z.infer<typeof accountSchema>;
export type FormType =
	| z.infer<typeof pointSchema>
	| z.infer<typeof accountSchema>;
export type SchemaType = typeof pointSchema | typeof accountSchema;
