import {
	IconButton,
	KakaoLoginButton,
	AppleLoginButton,
} from '@components/atoms';
import { Drawer, DrawerClose, DrawerContent } from '@components/ui/drawer';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';
const LoginBottomSheet = () => {
	const { type, isBottomSheetOpen, closeBottomSheet, setBottomSheetOpen } =
		useBottomSheetStore();

	if (!isBottomSheetOpen || type !== 'login') {
		return null;
	}

	return (
		<Drawer open={isBottomSheetOpen} onOpenChange={setBottomSheetOpen}>
			<DrawerContent className="mx-auto w-full max-w-[600px]">
				<div className="px-[23px]">
					<div className="flex w-full">
						<div className="w-full !typography-Body1 !typography-M mb-6">
							로그인하고
							<br />더 많은 서비스를 이용해보아요!
						</div>
						<IconButton
							onClick={closeBottomSheet}
							icon={{
								id: 'close',
								color: colors.Gray60,
								size: 24,
							}}
							className="!w-fit !p-0 absolute top-4 right-4"
						/>
					</div>
					<DrawerClose className="flex gap-3 flex-col w-full">
						<AppleLoginButton />
						<KakaoLoginButton />
					</DrawerClose>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default LoginBottomSheet;
