import DefaultButton from '@components/atoms/button/DefaultButton';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useNavigate } from 'react-router-dom';

const PostWithdrawalScreen = () => {
	const navigate = useNavigate();

	const handleConfirmClick = () => {
		navigate('/');
	};

	return (
		<div className="flex flex-col gap-6">
			<span className="typography-Subhead text-White">
				출금 신청이 완료되었습니다.
			</span>
			<span className="typography-Body2 typography-R text-Gray60">
				영업일 기준 3일 이내에
				<br />
				요청하신 계좌로 환급이 진행됩니다.
			</span>
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<DefaultButton
					title="쇼핑하러 가기"
					color={{
						textColor: 'Black',
						bgColor: 'White',
					}}
					size="small"
					onClick={handleConfirmClick}
				/>
			</FixedBottomLayout>
		</div>
	);
};

export default PostWithdrawalScreen;
