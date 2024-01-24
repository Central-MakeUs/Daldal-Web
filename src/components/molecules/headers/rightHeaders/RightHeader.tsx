import { IconButton } from '@components/atoms';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';
import { useNavigate } from 'react-router-dom';

const RightHeader = () => {
	const { openBottomSheet } = useBottomSheetStore();
	const navigate = useNavigate();

	// TODO: 로그인 상태에 따라 다른 동작 구현
	const handleClickLike = () => {
		openBottomSheet('login');
	};
	const handleClickPoint = () => {
		navigate('/point');
	};
	const handleClickMyPage = () => {
		navigate('/my-page');
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
