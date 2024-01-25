import PageLayout from '@layouts/PageLayout';
import { Outlet } from 'react-router-dom';

const Withdrawal = () => {
	return (
		<PageLayout leftType="back" className="px-6 py-3">
			<Outlet />
		</PageLayout>
	);
};

export default Withdrawal;
