import { Button } from 'konsta/react';

import IconButton from './button/IconButton';

type LikeButtonProps = {
	like: boolean;
};

const BuyWithLikeButton = ({ like }: LikeButtonProps) => {
	const handleLikeClick = () => {
		console.log('현재 상품 찜 등록 및 삭제하기');
	};

	const handleBuyClick = () => {
		console.log('구매하기 이동');
	};
	return (
		<div className="w-full flex gap-6">
			<IconButton
				className="!w-8 !px-0 !py-4"
				icon={{
					id: like ? 'like-full' : 'like-empty',
					size: 32,
				}}
				onClick={handleLikeClick}
			/>
			<Button
				className="w-full h-[38px] k-color-Primary !text-White !typography-Btn_text1 text-center rounded-sm"
				onClick={handleBuyClick}
			>
				3% 저렴하게 구입하기
			</Button>
		</div>
	);
};

export default BuyWithLikeButton;
