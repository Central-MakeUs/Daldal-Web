import { useEffect } from 'react';

import { Form, RequestLeaveModalButton } from '@components/atoms';
import { usePostPointWithdraw } from '@hooks/apis/point';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { useQueryClient } from '@tanstack/react-query';
import { FormType, pointSchema } from '@type/form';
import { useNavigate } from 'react-router-dom';

const ProgressWithdrawal = () => {
	const { setIsSelectedBankNeeded } = useAccountInfoStore();
	useEffect(() => {
		setIsSelectedBankNeeded(false);
	}, [setIsSelectedBankNeeded]);

	const navigate = useNavigate();
	const onSuccessCallback = () => {
		navigate('/withdrawal/post', { replace: true });
	};
	const { mutate } = usePostPointWithdraw(onSuccessCallback);

	const onSubmit = (data: FormType) => {
		if ('POINT' in data) {
			mutate(data.POINT);
		}
	};

	const queryClient = useQueryClient();
	const point = queryClient.getQueryData(['currentPoint']);

	console.log(pointSchema);

	const updatedPointSchema = pointSchema.refine(data => {
		if (typeof point === 'number') {
			return data.POINT < point;
		}
		return false;
	}, '보유한 포인트를 초과했어요.');

	console.log(updatedPointSchema);

	return (
		<div className="text-White flex flex-col gap-6">
			<span className="typography-Subhead">얼마를 출금하시겠습니까?</span>
			<Form onSubmit={onSubmit} schema={pointSchema}>
				<Form.Label label="최대 금액 5,000P" />
				<Form.PointInput name="POINT" autoFocus />
				<Form.HelperText name="POINT" />
				<Form.Button title="출금하기" />
			</Form>
			<RequestLeaveModalButton />
		</div>
	);
};

export default ProgressWithdrawal;
