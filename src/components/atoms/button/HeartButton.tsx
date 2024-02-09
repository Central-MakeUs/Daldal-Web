import { useEffect, useState } from 'react';

import { IconButton } from '@components/index';
import { useDeleteWithItem, usePostWishItem } from '@hooks/apis/wishList';

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
	const { mutate: deleteWishItem } = useDeleteWithItem(
		undefined,
		onErrorCallback,
	);

	const handleLikeHeart = () => {
		setCurLike(prev => !prev);
		//TODO 요청 중 버튼 클릭 막기
		if (curLike) {
			deleteWishItem(id);
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
