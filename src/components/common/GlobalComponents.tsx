import { CustomToaster } from '@components/atoms';
import {
	AccountBottomSheet,
	BankBottomSheet,
	ImageUploadBottomSheet,
	LoginBottomSheet,
} from '@components/molecules';
import { useModalStore } from '@stores/layerStore';

const GlobalComponents = () => {
	const { Modal } = useModalStore();

	return (
		<>
			<LoginBottomSheet />
			<AccountBottomSheet />
			<BankBottomSheet />
			<ImageUploadBottomSheet />
			<CustomToaster className="px-3" />
			{Modal}
		</>
	);
};

export default GlobalComponents;
