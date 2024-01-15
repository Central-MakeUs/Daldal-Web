export const GROUP_ORDER_LIST_POINT_DESCRIPTION = [
	'*환불 시 포인트 누적 불가',
	'*포인트는 결제 후 30일 뒤 입금 예정',
];

export const POINT_LIST_TITLE_BY_MONTH = {
	THIS: '이번달 예상 누적 포인트',
	NEXT: '다음달 예상 누적 포인트',
};

export type PointListTitleByMonthType = keyof typeof POINT_LIST_TITLE_BY_MONTH;
