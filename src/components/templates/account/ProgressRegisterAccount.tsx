import { AccountForm } from '@components/organisms';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { FormType } from '@type/form';
import { useNavigate } from 'react-router-dom';

const ProgressRegisterAccount = () => {
	const { setAccountInfo, accountInfo, setEnterType } = useAccountInfoStore();

	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		setAccountInfo({ ...accountInfo, ...data });
		setEnterType('REGISTER');
		navigate('/save-account', { replace: true });
	};

	return (
		<AccountForm
			buttonInfo={{
				title: '저장하기',
				onSubmit: onSubmit,
			}}
		/>
	);
};

export default ProgressRegisterAccount;
