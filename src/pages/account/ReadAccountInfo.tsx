import { PreEditAccount, PreRegisterAccount } from '@components/templates';
import { useGetAccountInfo } from '@hooks/apis/account';
import PageLayout from '@layouts/PageLayout';

const ReadAccountInfo = () => {
	const { data: accountInfo } = useGetAccountInfo();

	const renderAccountInfo = () => {
		if (accountInfo.account) {
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
