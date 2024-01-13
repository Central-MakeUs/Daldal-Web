import { Button } from 'konsta/react';

const WithdrawOrNotButton = () => {
	const handleNoClick = () => {
		console.log('아니요 클릭');
	};

	const handleWithdrawClick = () => {
		console.log('출금하기 클릭');
	};

	return (
		<div className="w-full flex gap-5">
			<Button
				className={`w-full !h-[45px] text-base font-semibold flex rounded !py-[14px] text-center
				 !border-[1px] !border-solid !border-Gray50 k-color-Black text-White`}
				onClick={handleNoClick}
			>
				아니오
			</Button>
			<Button
				className={`w-full !h-[45px] text-base font-semibold flex rounded !py-[14px] text-center
				 k-color-White text-bg`}
				onClick={handleWithdrawClick}
			>
				출금하기
			</Button>
		</div>
	);
};

export default WithdrawOrNotButton;
