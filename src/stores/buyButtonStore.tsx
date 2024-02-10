import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type BuyButtonStore = {
	isBuyButtonClicked: boolean;
	setIsBuyButtonClicked: (isClicked: boolean) => void;
};

export const useBuyButtonStore = create(
	persist<BuyButtonStore>(
		set => ({
			isBuyButtonClicked: false,
			setIsBuyButtonClicked: (isClicked: boolean) =>
				set({ isBuyButtonClicked: isClicked }),
		}),
		{
			name: 'form',
			storage: createJSONStorage(() => localStorage),
		},
	),
);
