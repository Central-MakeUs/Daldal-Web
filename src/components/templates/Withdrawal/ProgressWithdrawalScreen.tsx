import { z } from 'zod';

import Form from '@components/atoms/form/TextField';
import { schema } from '@type/form';

const ProgressWithdrawalScreen = () => {
	const onSubmit = (data: z.infer<typeof schema>) => {
		console.log(data);
	};

	return (
		<div className="text-White flex flex-col gap-6">
			<span className="typography-Subhead">얼마를 출금하시겠습니까?</span>
			<Form onSubmit={onSubmit}>
				<Form.Label label="최대 금액 5,000P" />
				<Form.PointInput name="POINT" autoFocus />
				<Form.HelperText name="POINT" />
				<Form.Button title="출금하기" />
			</Form>
		</div>
	);
};

export default ProgressWithdrawalScreen;
