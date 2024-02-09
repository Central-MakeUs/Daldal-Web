import { DefaultButton } from '@components/atoms';
import { DisabledAccountForm } from '@components/organisms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { useNavigate } from 'react-router-dom';

const PreEditAccount = () => {
	const { accountInfo } = useAccountInfoStore();

	const navigate = useNavigate();
	const handleRegisterAccountButtonClick = () => {
		navigate('/progress-account/edit');
	};

	return (
		<div className="flex flex-col">
			<DisabledAccountForm defaultValues={accountInfo} />
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

export default PreEditAccount;
