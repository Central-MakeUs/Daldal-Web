import { DefaultButton } from '@components/atoms';
import { SvgIcon } from '@components/common';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useNavigate } from 'react-router-dom';

const PreRegisterAccount = () => {
	const navigate = useNavigate();
	const handleRegisterAccountButtonClick = () => {
		navigate('/progress-account/register');
	};

	const message =
		'등록된 계좌 정보가 없습니다.\n계좌를 등록하여\n환급액을 수령해보세요!';

	return (
		<div className="flex flex-col justify-center items-center h-[calc(100vh-105px)]">
			<div className="flex flex-col gap-4 items-center text-center">
				<SvgIcon id="account-empty" size={163} />
				<div className="typography-Body2 typography-R text-White whitespace-pre-line">
					{message}
				</div>
			</div>
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<DefaultButton
					title="계좌 등록하기"
					color={{ bgColor: 'White', textColor: 'Black' }}
					size="large"
					onClick={handleRegisterAccountButtonClick}
				/>
			</FixedBottomLayout>
		</div>
	);
};

export default PreRegisterAccount;
