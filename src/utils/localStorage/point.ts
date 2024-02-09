import LocalStorageKey from '@constants/localStorageKey';

export const getHeldPoint = () =>
	localStorage.getItem(LocalStorageKey.HELD_POINT);
export const setHeldPoint = (point: string) =>
	localStorage.setItem(LocalStorageKey.HELD_POINT, point);
export const removeHeldPoint = () =>
	localStorage.removeItem(LocalStorageKey.HELD_POINT);
