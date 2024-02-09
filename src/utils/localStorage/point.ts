import LocalStorageKey from '@constants/localStorageKey';

export const getHeldPoint = () => {
	const point = localStorage.getItem(LocalStorageKey.HELD_POINT);
	if (point) {
		return parseInt(point, 10);
	}
	return null;
};
export const setHeldPoint = (point: number) =>
	localStorage.setItem(LocalStorageKey.HELD_POINT, point.toString());
export const removeHeldPoint = () =>
	localStorage.removeItem(LocalStorageKey.HELD_POINT);
