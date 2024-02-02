import { Button } from 'konsta/react';

const EditWishListHeader = () => {
	return (
		<div className="px-3 flex justify-between items-center">
			<div className="typography-Body1 typography-M text-White">상품 편집</div>
			<Button className="!w-auto !typography-Body4 !typography-R k-color-Secondary_B !text-Black rounded-[38px] !px-3 !py-1">
				완료
			</Button>
		</div>
	);
};

export default EditWishListHeader;
