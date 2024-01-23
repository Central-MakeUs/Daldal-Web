import { AccountForm } from '@components/organisms';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { FormType } from '@type/form';
import { useNavigate } from 'react-router-dom';

const ProgressEditAccount = () => {
	const { setAccountInfo, accountInfo, setEnterType } = useAccountInfoStore();

	const navigate = useNavigate();
	const onSubmit = (data: FormType) => {
		setAccountInfo({ ...accountInfo, ...data });
		setEnterType('EDIT');
		navigate('/post-account', { replace: true });
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

export default ProgressEditAccount;
