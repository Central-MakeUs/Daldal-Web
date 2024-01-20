import AccountForm from '@components/organisms/form/AccountForm';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { FormType } from '@type/form';
import { useNavigate } from 'react-router-dom';

const ProgressRegisterAccountTemplate = () => {
	const { setAccountInfo, accountInfo } = useAccountInfoStore();

	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		setAccountInfo({ ...accountInfo, ...data });
		navigate('/save-account', { replace: true });
	};

	return (
		<div>
			<AccountForm
				buttonInfo={{
					title: '저장하기',
					onSubmit: onSubmit,
				}}
			/>
		</div>
	);
};

export default ProgressRegisterAccountTemplate;
