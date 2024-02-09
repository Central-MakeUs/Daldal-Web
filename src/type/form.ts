import * as z from 'zod';

import { getHeldPoint } from '@utils/localStorage/point';

export const pointSchema = z.object({
	POINT: z
		.string()
		.min(1, '필수 입력 사항입니다.')
		.transform(value => +value.replace(/[^0-9]/g, ''))
		.refine(value => value <= 5000, '최대 금액이 5,000 P에요.')
		.refine(value => value >= 1000, '최소 금액이 1,000 P에요.')
		.refine(value => {
			const point = getHeldPoint();
			if (typeof point === 'number') {
				return value < point;
			}
			return false;
		}, '보유한 포인트를 초과했어요.'),
});

export const accountSchema = z.object({
	USER: z
		.string()
		.min(1, '필수 입력 사항입니다.')
		.max(5, '5 글자 이하로 입력해주세요.'),
	ACCOUNT: z
		.string()
		.min(1, '필수 입력 사항입니다.')
		.regex(/^[0-9]+$/, '숫자만 입력해주세요.')
		.max(16, '16 글자 이하로 입력해주세요.'),
});

export const formSchema = z.union([pointSchema, accountSchema]);

export type FormName =
	| keyof z.infer<typeof pointSchema>
	| keyof z.infer<typeof accountSchema>;
export type FormType =
	| z.infer<typeof pointSchema>
	| z.infer<typeof accountSchema>;
export type SchemaType =
	| typeof pointSchema
	| typeof accountSchema
	| typeof formSchema;
