import { create } from 'zustand';

type WishListEditStore = {
	checkedItems: number[];
	addCheckedItem: (id: number) => void;
	deleteCheckedItem: (id: number) => void;
};

export const useWishListEditStore = create<WishListEditStore>(set => ({
	checkedItems: [],
	addCheckedItem: id =>
		set(state => ({ checkedItems: [...state.checkedItems, id] })),
	deleteCheckedItem: id =>
		set(state => ({
			checkedItems: state.checkedItems.filter(i => i !== id),
		})),
}));

type WishListStatusType = 'default' | 'edit';

type WishListStore = {
	wishListStatus: WishListStatusType;
	setWishListStatus: (status: WishListStatusType) => void;
};

export const useWishListStore = create<WishListStore>(set => ({
	wishListStatus: 'default',
	setWishListStatus: status => set({ wishListStatus: status }),
}));
