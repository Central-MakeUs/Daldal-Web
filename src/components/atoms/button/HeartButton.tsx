import { useEffect, useState } from 'react';

import { IconButton, ToastMessageLikeOrDelete } from '@components/index';
import { useDeleteWishItem, usePostWishItem } from '@hooks/apis/wishList';
import toast from 'react-hot-toast';

type HeartButtonProps = {
	id: number;
	isDib: boolean;
	size: number;
	className?: string;
};

const HeartButton = ({ id, isDib, size, className }: HeartButtonProps) => {
	const [curLike, setCurLike] = useState<boolean>(isDib);

	useEffect(() => {
		setCurLike(isDib);
	}, [isDib]);

	const onErrorCallback = () => {
		setCurLike(prev => !prev);
	};

	const { mutate: postWishItem } = usePostWishItem(undefined, onErrorCallback);
	const { mutate: deleteWishList } = useDeleteWishItem(
		undefined,
		onErrorCallback,
	);

	const handleLikeHeart = () => {
		toast(() => <ToastMessageLikeOrDelete like={!curLike} />, {
			duration: 2000,
		});
		setCurLike(prev => !prev);
		//TODO 요청 중 버튼 클릭 막기
		if (curLike) {
			deleteWishList([id]);
		} else {
			postWishItem(id);
		}
	};
	return (
		<IconButton
			className={className}
			icon={{
				id: curLike ? 'like-full' : 'like-empty',
				size,
			}}
			onClick={handleLikeHeart}
		/>
	);
};

export default HeartButton;
