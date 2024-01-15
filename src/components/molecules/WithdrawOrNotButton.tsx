import DefaultButton from '@components/atoms/button/DefaultButton';

const WithdrawOrNotButton = () => {
	const handleNoClick = () => {
		console.log('아니요 클릭');
	};

	const handleWithdrawClick = () => {
		console.log('출금하기 클릭');
	};

	return (
		<div className="w-full flex gap-5">
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
	);
};

export default WithdrawOrNotButton;
