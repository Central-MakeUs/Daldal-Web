import { Button } from 'konsta/react';

import { useWishListStore } from '@stores/wishListStore';

const EditWishListHeader = () => {
	const setWishListStatus = useWishListStore(state => state.setWishListStatus);

	const handleComplete = () => {
		setWishListStatus('default');
	};

	return (
		<div className="px-3 flex justify-between items-center">
			<div className="typography-Body1 typography-M text-White">상품 편집</div>
			<Button
				className="!w-auto !typography-Body4 !typography-R k-color-Secondary_B !text-Black rounded-[38px] !px-3 !py-1"
				onClick={handleComplete}
			>
				완료
			</Button>
		</div>
	);
};

export default EditWishListHeader;
