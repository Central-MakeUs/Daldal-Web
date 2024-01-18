import PreWithdrawalScreen from '@components/templates/Withdrawal/PreWithdrawalScreen';
import PageLayout from '@layouts/PageLayout';

// import PostWithdrawalScreen from '@components/templates/Withdrawal/PostWithdrawalScreen';
// import ProgressWithdrawalScreen from '@components/templates/Withdrawal/ProgressWithdrawalScreen';

const Withdraw = () => {
	return (
		<PageLayout leftType="back" className="p-6">
			<PreWithdrawalScreen
				accountBank="국민은행"
				accountNumber="123456789"
				point={'1000'}
			/>
			{/* <ProgressWithdrawalScreen /> */}
			{/* <PostWithdrawalScreen /> */}
		</PageLayout>
	);
};

export default Withdraw;
