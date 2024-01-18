import DefaultButton from '@components/atoms/button/DefaultButton';
import GroupOrderTextPoint from '@components/atoms/GroupOrderTextPoint';

type PreWithdrawalScreenProps = {
	// TODO api로 값 받아오기 (은행 정보, 계좌 번호, 누적 포인트)
	accountBank: string;
	accountNumber: string;
	point: string;
};

const PreWithdrawalScreen = ({
	accountBank,
	accountNumber,
	point,
}: PreWithdrawalScreenProps) => {
	const handleNoClick = () => {
		console.log('아니요');
	};

	const handleWithdrawClick = () => {
		console.log('출금하기');
	};

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
			<div className="w-full flex gap-5 fixed bottom-5 max-w-[600px]">
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
		</div>
	);
};

export default PreWithdrawalScreen;
