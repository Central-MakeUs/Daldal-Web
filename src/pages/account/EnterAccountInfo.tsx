import PageLayout from '@layouts/PageLayout';
import { Outlet } from 'react-router-dom';

const EnterAccountInfo = () => {
	return (
		<PageLayout leftType="back" className="p-6">
			<Outlet />
		</PageLayout>
	);
};

export default EnterAccountInfo;
