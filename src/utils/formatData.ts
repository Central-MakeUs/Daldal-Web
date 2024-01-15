export const changeNumberIntoStringWithComma = (point: number) => {
	return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getPointText = (point: number) => {
	return `${changeNumberIntoStringWithComma(point)} P`;
};

export const getOriginalPoint = (pointText: string) => {
	return String(Number(pointText.replace(/[^0-9]/g, '')));
};
