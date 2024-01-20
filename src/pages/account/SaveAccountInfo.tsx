import { useEffect } from 'react';

import DefaultButton from '@components/atoms/button/DefaultButton';
import DisabledAccountForm from '@components/organisms/form/DisabledAccountForm';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { useNavigate } from 'react-router-dom';

const SaveAccountInfo = () => {
	const { accountInfo, clearAccountInfo, enterType } = useAccountInfoStore();

	const navigate = useNavigate();
	const handleRegisterAccountButtonClick = () => {
		// TODO: api를 통해 submit 날리기
		navigate('/my-page');
	};

	const messageByAction = {
		REGISTER: '정보를 한 번 더 확인해주세요!\n저장하시겠습니까?',
		EDIT: '정보를 한 번 더 확인해주세요!\n수정하시겠습니까?',
	};

	useEffect(() => {
		return () => clearAccountInfo();
	}, [clearAccountInfo]);

	return (
		<PageLayout className="p-6" leftType="back">
			<div className="flex flex-col">
				<DisabledAccountForm defaultValues={accountInfo} />
				<div className="text-White typography-Body1 typography-M mt-[38px] whitespace-pre-line">
					{messageByAction[enterType]}
				</div>
				<FixedBottomLayout childrenPadding="px-6" height="h-15">
					<DefaultButton
						title="저장하기"
						color={{ bgColor: 'White', textColor: 'Black' }}
						size="large"
						onClick={handleRegisterAccountButtonClick}
					/>
				</FixedBottomLayout>
			</div>
		</PageLayout>
	);
};

export default SaveAccountInfo;
