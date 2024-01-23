import { Form } from '@components/atoms';
import { FormType, pointSchema } from '@type/form';
import { useNavigate } from 'react-router-dom';

const ProgressWithdrawalScreen = () => {
	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		// data api 처리 후 navigate하도록 코드 변경
		console.log(data);
		navigate('/withdrawal/post', { replace: true });
	};

	return (
		<div className="text-White flex flex-col gap-6">
			<span className="typography-Subhead">얼마를 출금하시겠습니까?</span>
			<Form onSubmit={onSubmit} schema={pointSchema}>
				<Form.Label label="최대 금액 5,000P" />
				<Form.PointInput name="POINT" autoFocus />
				<Form.HelperText name="POINT" />
				<Form.Button title="출금하기" />
			</Form>
		</div>
	);
};

export default ProgressWithdrawalScreen;
