export const changeNumberIntoStringWithComma = (point: number) => {
	return new Intl.NumberFormat().format(point);
};

export const getPointText = (point: number) => {
	return `${changeNumberIntoStringWithComma(point)} P`;
};

export const getOriginalPoint = (pointText: string) => {
	return String(Number(pointText.replace(/[^0-9]/g, '')));
};

export const getPriceText = (price: number) => {
	return `${changeNumberIntoStringWithComma(price)}원`;
};
