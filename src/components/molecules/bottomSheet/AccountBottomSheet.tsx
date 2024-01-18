import DefaultButton from '@components/atoms/button/DefaultButton';
import IconButton from '@components/atoms/button/IconButton';
import { Drawer, DrawerContent } from '@components/ui/drawer';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';

const AccountBottomSheet = () => {
	const { type, isBottomSheetOpen, closeBottomSheet, setBottomSheetOpen } =
		useBottomSheetStore();

	if (!isBottomSheetOpen || type !== 'account') {
		return null;
	}
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
					className="!w-fit absolute top-1 right-0"
				/>
				<div>
					<h4 className="text-Gray60 typography-Body4 typography-M leading-normal mb-2">
						계좌가 등록되어 있지 않아, <br /> 달달한 포인트를 받기 어려워요 😥
					</h4>
					<h2 className="text-Black typography-Body1 typography-M">
						출금 계좌를 등록해주세요!
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
				/>
			</DrawerContent>
		</Drawer>
	);
};

export default AccountBottomSheet;
