import PageLayout from '@layouts/PageLayout';
import { Outlet } from 'react-router-dom';

const EnterAccountInfo = () => {
	return (
		<PageLayout leftType="back" className="px-6 py-[15px]">
			<Outlet />
		</PageLayout>
	);
};

export default EnterAccountInfo;
