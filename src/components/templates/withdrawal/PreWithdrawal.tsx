import { GroupOrderTextPoint, DefaultButton } from '@components/atoms';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useNavigate } from 'react-router-dom';

const PreWithdrawal = () => {
	const navigate = useNavigate();
	const handleNoClick = () => {
		navigate('/point');
	};

	const handleWithdrawClick = () => {
		navigate('/withdrawal/progress');
	};

	// TODO api로 값 받아오기 (은행 정보, 계좌 번호, 누적 포인트)
	const accountBank = '국민은행';
	const accountNumber = '123456789';
	const point = '1000';

	return (
		<div className="typography-Body1 typography-R text-White flex flex-col gap-12 h-full">
			<div className="flex flex-col">
				회원님의 계좌는
				<span className="typography-Headline">{accountBank}</span>
				<div className="flex items-end gap-2">
					<span className="typography-Headline">{accountNumber}</span>
					입니다.
				</div>
			</div>
			<div className="flex flex-col">
				회원님의 누적 포인트는
				<div className="flex items-end gap-2">
					<GroupOrderTextPoint point={point} />
					입니다.
				</div>
			</div>
			출금하시겠습니까?
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<div className="flex gap-3">
					<DefaultButton
						title="아니요"
						color={{
							textColor: 'White',
							bgColor: 'Black',
						}}
						size="small"
						onClick={handleNoClick}
					/>
					<DefaultButton
						title="출금하기"
						color={{
							textColor: 'Black',
							bgColor: 'White',
						}}
						size="small"
						onClick={handleWithdrawClick}
					/>
				</div>
			</FixedBottomLayout>
		</div>
	);
};

export default PreWithdrawal;
