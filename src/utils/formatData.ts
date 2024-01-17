import dayjs from 'dayjs';

import { Point } from '@models/point/entity/point';

export const changeNumberIntoStringWithComma = (point: number) => {
	return new Intl.NumberFormat().format(point);
};

export const isPointState = (point: Point['point']) => {
	return !/^[0-9]+$/.test(String(point));
};

export const getPointText = (point: Point['point']) => {
	if (isPointState(point)) {
		return point;
	}

	return `${changeNumberIntoStringWithComma(+point)} P`;
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
