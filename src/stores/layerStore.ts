import { create } from 'zustand';

type BottomSheetType = 'login';

type BottomSheetStoreType = {
	isBottomSheetOpen: boolean;
	type: BottomSheetType;
	openBottomSheet: (openingBottomSheet: BottomSheetType) => void;
	closeBottomSheet: () => void;
	setBottomSheetOpen: (isBottomSheetOpen: boolean) => void;
};

export const useBottomSheetStore = create<BottomSheetStoreType>(set => ({
	isBottomSheetOpen: false,
	type: 'login',
	openBottomSheet: (openingBottomSheet: BottomSheetType) =>
		set({ isBottomSheetOpen: true, type: openingBottomSheet }),
	closeBottomSheet: () => set({ isBottomSheetOpen: false }),
	setBottomSheetOpen: (isBottomSheetOpen: boolean) =>
		set({ isBottomSheetOpen }),
}));
