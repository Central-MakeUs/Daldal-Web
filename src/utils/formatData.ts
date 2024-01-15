export function changeNumberIntoStringWithComma(point: number) {
	return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getPointText(point: number) {
	return `${changeNumberIntoStringWithComma(point)} P`;
}

export function getOriginalPoint(pointText: string) {
	return String(Number(pointText.replace(/[^0-9]/g, '')));
}
