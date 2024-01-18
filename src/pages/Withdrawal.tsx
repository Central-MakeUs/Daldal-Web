import PageLayout from '@components/templates/PageLayout';
import PreWithdrawalScreen from '@components/templates/Withdrawal/PreWithdrawalScreen';
import ProgressWithdrawalScreen from '@components/templates/Withdrawal/ProgressWithdrawalScreen';

const Withdraw = () => {
	return (
		<PageLayout leftType="back" className="p-6">
			{/* <PreWithdrawalScreen
				accountBank="국민은행"
				accountNumber="123456789"
				point={'1000'}
			/> */}
			<ProgressWithdrawalScreen />
		</PageLayout>
	);
};

export default Withdraw;
