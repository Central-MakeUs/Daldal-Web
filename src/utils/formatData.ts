import dayjs from 'dayjs';

import { Point, RefundStatus } from '@models/point/entity/point';

export const changeNumberIntoStringWithComma = (point: number) => {
	return new Intl.NumberFormat().format(point);
};

export const isPointState = (point: Point) => {
	return !/^[0-9]+$/.test(String(point));
};

export const getPointText = (point?: Point, status?: RefundStatus) => {
	switch (status) {
		case '진행중':
			return status;
		case '미승인':
			return status;
		case '출금':
			return (
				(point && `${changeNumberIntoStringWithComma(+point)} P 출금`) ||
				'0 P 출금'
			);
		case '승인':
			return (point && `${changeNumberIntoStringWithComma(+point)} P`) || '0 P';
		default:
			return (point && `${changeNumberIntoStringWithComma(+point)} P`) || '0 P';
	}
};

export const getOriginalPoint = (pointText: string) => {
	return String(Number(pointText.replace(/[^0-9]/g, '')));
};

export const getPriceText = (price: number) => {
	return `${changeNumberIntoStringWithComma(price)}원`;
};

export const getDataInYYYYMMDDSplitedByDot = (date: string) => {
	return dayjs(date).format('YYYY.MM.DD');
};

export const getYoutubeIdFromUrl = (urls: string[]) => {
	const url = urls[0];
	const idRegex =
		/(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtube\.com\/(?:watch\?.*v=|shorts\/|embed\/)|youtu.be\/)([\w-]{11})/;
	const idMatch = url.match(idRegex);
	const videoId = idMatch ? idMatch[1] : '';
	return videoId;
};
