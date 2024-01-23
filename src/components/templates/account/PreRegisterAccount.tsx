import { DefaultButton } from '@components/atoms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { mockImages } from '@mocks/images';
import { useNavigate } from 'react-router-dom';

const PreRegisterAccountTemplate = () => {
	// todo: 디자이너님 이미지 생기면 mock 이미지 진짜 이미지로 변경
	const image = mockImages[0];
	const navigate = useNavigate();
	const handleRegisterAccountButtonClick = () => {
		navigate('/enter-account/register');
	};

	const message =
		'등록된 계좌 정보가 없습니다.\n계좌를 등록하여\n환급액을 수령해보세요!';

	return (
		<div className="flex flex-col justify-center items-center h-[calc(100vh-105px)]">
			<div className="flex flex-col gap-4 items-center text-center">
				<img src={image} alt="step1" className="w-[163px] h-[163px]" />
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

export default PreRegisterAccountTemplate;
