import { Button } from 'konsta/react';

import { useWishListStore } from '@stores/wishListStore';

const DefaultWishListHeader = () => {
	const setWishListStatus = useWishListStore(state => state.setWishListStatus);

	const handleEdit = () => {
		setWishListStatus('edit');
	};

	return (
		<div className="px-3 flex justify-between items-center">
			<div className="typography-Body1 typography-M text-White">찜한 목록</div>
			<Button
				className="!w-auto !typography-Body4 !typography-R k-color-Secondary_B"
				clear
				onClick={handleEdit}
			>
				편집하기
			</Button>
		</div>
	);
};

export default DefaultWishListHeader;
