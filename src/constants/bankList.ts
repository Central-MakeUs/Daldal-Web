import { IconId } from '@type/svgIcon';

const bankTextList = [
	'NH 농협은행',
	'KB 국민은행',
	'신한은행',
	'우리은행',
	'IBK 기업은행',
	'KEB 하나은행',
	'카카오뱅크',
	'대구은행',
	'부산은행',
	'MG 새마을금고',
	'우체국',
	'광주은행',
	'경남은행',
	'신협중앙회',
	'수협',
	'SG 제일은행',
	'케이뱅크',
	'KDB 산업은행',
	'제주은행',
	'전북은행',
	'토스뱅크',
];

const bankIconList: IconId[] = [
	'bank-nh',
	'bank-kb',
	'bank-sinhan',
	'bank-woori',
	'bank-ibk',
	'bank-keb',
	'bank-kakao',
	'bank-dgb',
	'bank-bnk',
	'bank-mg',
	'bank-postOffice',
	'bank-kwangju',
	'bank-bnk',
	'bank-creditUnion',
	'bank-sh',
	'bank-first',
	'bank-kbank',
	'bank-industry',
	'bank-jeju',
	'bank-jeonbuk',
	'bank-toss',
];

export type BankNameType = (typeof bankTextList)[number];

type BankListType = {
	key: number;
	iconId: IconId;
	title: string;
};

export const bankList: BankListType[] = bankTextList.map((text, idx) => ({
	key: idx,
	iconId: bankIconList[idx],
	title: text,
}));
