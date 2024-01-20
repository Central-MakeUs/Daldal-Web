import PreEditAccountTemplate from '@components/templates/account/PreEditAccount';
import PreRegisterAccountTemplate from '@components/templates/account/PreRegisterAccount';
import PageLayout from '@layouts/PageLayout';

const ReadAccountInfo = () => {
	// TODO: api를 통해 계좌 정보 가져오기
	// data가 있는 형태는 아래 주석을 풀고 사용하세요.
	// const accountInfo = mockAccountForm;
	const accountInfo = null;

	const renderAccountInfo = () => {
		if (accountInfo) {
			return <PreEditAccountTemplate />;
		}

		return <PreRegisterAccountTemplate />;
	};

	return (
		<PageLayout className="p-6" leftType="back">
			{renderAccountInfo()}
		</PageLayout>
	);
};

export default ReadAccountInfo;
