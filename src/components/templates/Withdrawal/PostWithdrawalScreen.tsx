import FixedBottomLayout from '@layouts/FixedBottomLayout';

import DefaultButton from '@components/atoms/button/DefaultButton';

const PostWithdrawalScreen = () => {
	const handleConfirmClick = () => {
		console.log('쇼핑하러 가기 버튼 클릭');
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
