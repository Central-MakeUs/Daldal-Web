import IconButton from '@components/atoms/IconButton';

type RightHeaderProps = {
	likeWithNum: boolean;
};

const RightHeader = ({ likeWithNum }: RightHeaderProps) => {
	const handleClickLike = () => {
		console.log('찜 페이지 이동');
	};
	const handleClickPoint = () => {
		console.log('포인트 페이지 이동');
	};
	const handleClickMyPage = () => {
		console.log('마이페이지 이동');
	};

	const menuStyle = '!w-8 !px-0 !py-4';

	return (
		<div className="flex flex-row gap-3">
			<IconButton
				className={menuStyle}
				icon={{
					id: likeWithNum ? 'like-with-num' : 'like-full',
					size: 32,
				}}
				onClick={handleClickLike}
			/>
			<IconButton
				className={menuStyle}
				icon={{
					id: 'point-paid',
					size: 24,
				}}
				onClick={handleClickPoint}
			/>
			<IconButton
				className={menuStyle}
				icon={{
					id: 'mypage-person',
					size: 32,
				}}
				onClick={handleClickMyPage}
			/>
		</div>
	);
};

export default RightHeader;
