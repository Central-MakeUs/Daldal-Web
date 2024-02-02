import { Button } from 'konsta/react';

const DefaultWishListHeader = () => {
	return (
		<div className="px-3 flex justify-between items-center">
			<div className="typography-Body1 typography-M text-White">찜한 목록</div>
			<Button
				className="!w-auto !typography-Body4 !typography-R k-color-Secondary_B"
				clear
			>
				편집하기
			</Button>
		</div>
	);
};

export default DefaultWishListHeader;
