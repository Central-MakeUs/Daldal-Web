import { IconButton, DefaultButton } from '@components/atoms';
import { Drawer, DrawerContent } from '@components/ui/drawer';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';
import { useNavigate } from 'react-router-dom';

const AccountBottomSheet = () => {
	const navigate = useNavigate();
	const { type, isBottomSheetOpen, closeBottomSheet, setBottomSheetOpen } =
		useBottomSheetStore();

	if (!isBottomSheetOpen || type !== 'account') {
		return null;
	}

	const messages = {
		description:
			'계좌가 등록되어 있지 않아,\n 달달한 포인트를 받기 어려워요 😥',
		keynote: '출금 계좌를 등록해주세요!',
	};

	const handleClickBuyButton = () => {
		navigate('/pre-account');
		closeBottomSheet();
	};

	return (
		<Drawer open={isBottomSheetOpen} onOpenChange={setBottomSheetOpen}>
			<DrawerContent className="mx-auto w-full max-w-[600px] px-6 !h-[206px]">
				<IconButton
					onClick={closeBottomSheet}
					icon={{
						id: 'close',
						color: colors.Gray60,
						size: 24,
					}}
					className="!w-fit !p-0 absolute top-4 right-4"
				/>
				<div className="flex flex-col gap-2">
					<h4 className="text-Gray60 typography-Body4 typography-M whitespace-pre-line">
						{messages.description}
					</h4>
					<h2 className="text-Black typography-Body1 typography-M">
						{messages.keynote}
					</h2>
				</div>
				<DefaultButton
					title="출금 계좌 등록하기"
					color={{
						bgColor: 'Primary',
						textColor: 'White',
					}}
					size="large"
					className="m-auto"
					onClick={handleClickBuyButton}
				/>
			</DrawerContent>
		</Drawer>
	);
};

export default AccountBottomSheet;
