import { DefaultButton } from '@components/atoms';
import DisabledAccountForm from '@components/organisms/form/DisabledAccountForm';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { mockAccountForm } from '@mocks/form';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { useNavigate } from 'react-router-dom';

const PreEditAccountTemplate = () => {
	// TODO: api를 통해 사용자 account 정보 가져오기
	const defaultValues = mockAccountForm;

	const { setAccountInfo } = useAccountInfoStore();
	const saveAccountInfo = () => {
		setAccountInfo(defaultValues);
	};

	const navigate = useNavigate();
	const handleRegisterAccountButtonClick = () => {
		saveAccountInfo();
		navigate('/enter-account/edit');
	};

	return (
		<div className="flex flex-col">
			<DisabledAccountForm defaultValues={defaultValues} />
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<DefaultButton
					title="수정하기"
					color={{ bgColor: 'White', textColor: 'Black' }}
					size="large"
					onClick={handleRegisterAccountButtonClick}
				/>
			</FixedBottomLayout>
		</div>
	);
};

export default PreEditAccountTemplate;
