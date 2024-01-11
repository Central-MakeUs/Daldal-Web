export function changeNumberIntoStringWithComma(point: number) {
	return point.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function getPointText(point: number) {
	return `${changeNumberIntoStringWithComma(point)} P`;
}
