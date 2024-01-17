import DefaultButton from '@components/atoms/button/DefaultButton';
import IconButton from '@components/atoms/button/IconButton';
import { Drawer, DrawerContent } from '@components/ui/drawer';
import colors from '@constants/colors';
import { useBottomSheetStore } from '@stores/layerStore';
const LoginBottomSheet = () => {
	const { isBottomSheetOpen, closeBottomSheet, setBottomSheetOpen } =
		useBottomSheetStore();

	if (!isBottomSheetOpen) {
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
							className="!w-fit"
						/>
					</div>
					<div className="flex gap-3 flex-col w-full">
						<DefaultButton
							iconId="baseline-apple"
							title="애플 아이디로 계속하기"
							color={{
								bgColor: 'White',
								textColor: 'Black',
								borderColor: 'Gray20',
							}}
							size="large"
							onClick={closeBottomSheet}
						/>
						<DefaultButton
							iconId="kakaoTalk"
							title="카카오톡으로 계속하기"
							color={{
								bgColor: 'Kakao',
								textColor: 'Black',
							}}
							size="large"
							onClick={closeBottomSheet}
						/>
					</div>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default LoginBottomSheet;
