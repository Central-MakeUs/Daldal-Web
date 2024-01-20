import { Account, AccountFormName } from '@models/form/entity/account';

export const mockAccountForm: Account = {
	USER: '홍길동',
	BANK: '신한은행',
	ACCOUNT: '110123456789',
};

export const accountFormLabelMapping: Record<AccountFormName, string> = {
	USER: '입금자명',
	BANK: '은행명',
	ACCOUNT: '계좌번호',
};
