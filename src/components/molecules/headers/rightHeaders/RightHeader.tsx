import { IconButton } from '@components/atoms';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';
import isLogin from '@utils/isLogin';
import { useNavigate } from 'react-router-dom';

const RightHeader = () => {
	const navigate = useNavigate();
	const { openBottomSheet } = useBottomSheetStore();

	const handleClickLike = () => {
		if (isLogin()) {
			navigate('/wish-list');
		} else {
			openBottomSheet('login');
		}
	};
	const handleClickPoint = () => {
		if (isLogin()) {
			navigate('/point');
		} else {
			openBottomSheet('login');
		}
	};
	const handleClickMyPage = () => {
		if (isLogin()) {
			navigate('/my-page');
		} else {
			openBottomSheet('login');
		}
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
