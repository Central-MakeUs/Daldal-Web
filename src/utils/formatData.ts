import dayjs from 'dayjs';

import { Point } from '@models/point/entity/point';
import { KoRefundStatus } from '@type/refundStatus';

export const changeNumberIntoStringWithComma = (point: number) => {
	return new Intl.NumberFormat().format(point);
};

export const isPointState = (point: Point) => {
	return !/^[0-9]+$/.test(String(point));
};

export const getPointText = (point?: Point, status?: KoRefundStatus) => {
	switch (status) {
		case '적립 진행중':
		case '출금 진행중':
			return status;
		case '적립 미승인':
		case '출금 미승인':
			return status;
		case '적립':
		case '출금':
			return (
				(point &&
					`${changeNumberIntoStringWithComma(
						+getOriginalPoint(point),
					)} P ${status}`) ||
				`0 P ${status}`
			);
		default:
			return (
				(point &&
					`${changeNumberIntoStringWithComma(+getOriginalPoint(point))} P`) ||
				'0 P'
			);
	}
};

export const getOriginalPoint = (pointText: string) => {
	return String(pointText).replace(/[^0-9]/g, '');
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
