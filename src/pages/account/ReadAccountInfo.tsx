import { useEffect } from 'react';

import { PreEditAccount, PreRegisterAccount } from '@components/templates';
import { useGetAccountInfo } from '@hooks/apis/account';
import PageLayout from '@layouts/PageLayout';
import { useAccountInfoStore } from '@stores/formInfoStore';

const ReadAccountInfo = () => {
	const { data: accountInfo, mutate } = useGetAccountInfo();
	const setAccountInfo = useAccountInfoStore(state => state.setAccountInfo);

	useEffect(() => {
		mutate();
	}, []);

	useEffect(() => {
		if (accountInfo) {
			setAccountInfo({
				USER: accountInfo.data.depositorName,
				BANK: accountInfo.data.accountBank,
				ACCOUNT: accountInfo.data.account,
			});
		}
	}, [accountInfo]);

	const renderAccountInfo = () => {
		if (accountInfo && accountInfo.data.account) {
			return <PreEditAccount />;
		}

		return <PreRegisterAccount />;
	};

	return (
		<PageLayout className="px-6 py-[15px]" leftType="back">
			{renderAccountInfo()}
		</PageLayout>
	);
};

export default ReadAccountInfo;
