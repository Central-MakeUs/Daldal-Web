import { Button } from 'konsta/react';

import { useSearchHistoryStore } from '@stores/searchHistoryStore';

const PreSearchHeader = () => {
	const handleDeleteSearchHistory = useSearchHistoryStore(
		state => state.deleteSearchHistory,
	);

	return (
		<div className="flex justify-between items-center pb-3">
			<h3 className="typography-Body3 typography-M text-Gray50">최근 검색어</h3>
			<Button
				className="!typography-Body4 !typography-R k-color-Secondary_B !w-fit"
				clear
				onClick={handleDeleteSearchHistory}
			>
				지우기
			</Button>
		</div>
	);
};

export default PreSearchHeader;
