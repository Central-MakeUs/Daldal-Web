import IconButton from '@components/atoms/button/IconButton';
import BankButton from '@components/atoms/myPage/BankButton';
import { Drawer, DrawerContent } from '@components/ui/drawer';
import { BankNameType, bankList } from '@constants/bankList';
import colors from '@constants/colors';
import { useAccountInfoStore } from '@stores/formInfoStore';
import { useBottomSheetStore } from '@stores/layerStore';

const BankBottomSheet = () => {
	const { type, isBottomSheetOpen, closeBottomSheet, setBottomSheetOpen } =
		useBottomSheetStore();

	const { setAccountInfo, accountInfo } = useAccountInfoStore();

	const handleSelectBank = (bank: BankNameType) => {
		setAccountInfo({ ...accountInfo, BANK: bank });
		closeBottomSheet();
	};

	if (!isBottomSheetOpen || type !== 'bank') {
		return null;
	}

	return (
		<Drawer open={isBottomSheetOpen} onOpenChange={setBottomSheetOpen}>
			<DrawerContent className="mx-auto w-full max-w-[600px] px-6 !h-[520px]">
				<IconButton
					onClick={closeBottomSheet}
					icon={{
						id: 'close',
						color: colors.Gray60,
						size: 24,
					}}
					className="!w-fit absolute top-1 right-0"
				/>
				<h2 className="text-Black typography-Body1 typography-M mb-3">
					은행을 선택해주세요.
				</h2>
				<div className="grid grid-cols-3 gap-[14px] overflow-auto mb-3">
					{bankList.map((bank, index) => (
						<BankButton
							title={bank.title}
							iconId={bank.iconId}
							onClick={() => handleSelectBank(bank.title)}
							key={`BankButton#${index}`}
						/>
					))}
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default BankBottomSheet;
