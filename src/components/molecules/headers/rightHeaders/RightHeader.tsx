import IconButton from '@components/atoms/button/IconButton';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';

const RightHeader = () => {
	const { openBottomSheet } = useBottomSheetStore();
	const handleClickLike = () => {
		openBottomSheet('login');
	};
	const handleClickPoint = () => {
		openBottomSheet('login');
	};
	const handleClickMyPage = () => {
		openBottomSheet('login');
	};

	const menuStyle = '!w-8 !px-0 !py-4';

	return (
		<div className="flex flex-row gap-3">
			<IconButton
				className={menuStyle}
				icon={{
					id: 'like-full',
					size: 32,
				}}
				onClick={handleClickLike}
			/>
			<IconButton
				className={menuStyle}
				icon={{
					id: 'point-paid',
					size: 24,
					color: colors.White,
				}}
				onClick={handleClickPoint}
			/>
			<IconButton
				className={menuStyle}
				icon={{
					id: 'mypage-person',
					size: 28,
				}}
				onClick={handleClickMyPage}
			/>
		</div>
	);
};

export default RightHeader;
