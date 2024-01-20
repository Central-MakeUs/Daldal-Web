import AccountForm from '@components/organisms/form/AccountForm';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { FormType } from '@type/form';
import { useNavigate } from 'react-router-dom';

const ProgressEditAccountTemplate = () => {
	const { setAccountInfo, accountInfo } = useAccountInfoStore();

	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		setAccountInfo({ ...accountInfo, ...data });
		navigate('/save-account', { replace: true });
	};

	return (
		<AccountForm
			buttonInfo={{
				title: '수정완료',
				onSubmit: onSubmit,
			}}
			isEditing
		/>
	);
};

export default ProgressEditAccountTemplate;
