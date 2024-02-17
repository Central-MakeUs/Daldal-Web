import { GroupOrderTextPoint, DefaultButton } from '@components/atoms';
import { useGetAccountInfo } from '@hooks/apis/account';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

const PreWithdrawal = () => {
	const navigate = useNavigate();
	const handleNoClick = () => {
		navigate('/point');
	};

	const handleWithdrawClick = () => {
		navigate('/withdrawal/progress');
	};

	const queryClient = useQueryClient();
	const { data } = useGetAccountInfo();
	const point = (queryClient.getQueryData(['currentPoint']) as { data: number })
		?.data;

	return (
		<div className="typography-Body1 typography-R text-White flex flex-col gap-12 h-full">
			<div className="flex flex-col">
				회원님의 계좌는
				<span className="typography-Headline">{data?.accountBank}</span>
				<div className="flex items-end gap-2">
					<span className="typography-Headline">{data?.account}</span>
					입니다.
				</div>
			</div>
			<div className="flex flex-col">
				회원님의 누적 포인트는
				<div className="flex items-end gap-2">
					<GroupOrderTextPoint point={String(point)} />
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
