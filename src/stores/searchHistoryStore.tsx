import { SearchHistory, SearchQuery } from '@type/searchQuery';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type SearchHistoryStore = {
	searchHistoryList: SearchHistory;
	addSearchQuery: (searchQuery: SearchQuery) => void;
};

export const useSearchHistoryStore = create(
	persist<SearchHistoryStore>(
		(set, get) => ({
			searchHistoryList: [],
			addSearchQuery: (searchQuery: SearchQuery) => {
				set({ searchHistoryList: [...get().searchHistoryList, searchQuery] });
			},
		}),
		{
			name: 'searchHistory',
			storage: createJSONStorage(() => sessionStorage),
		},
	),
);
