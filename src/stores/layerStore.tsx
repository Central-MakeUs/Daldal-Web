import { Modal } from '@components/atoms';
import { create } from 'zustand';

type BottomSheetType = 'login' | 'account' | 'bank' | 'imageUpload';

type BottomSheetStoreType = {
	isBottomSheetOpen: boolean;
	type: BottomSheetType;
	openBottomSheet: (openingBottomSheet: BottomSheetType) => void;
	closeBottomSheet: () => void;
	setBottomSheetOpen: (isBottomSheetOpen: boolean) => void;
};

export const useBottomSheetStore = create<BottomSheetStoreType>(set => ({
	isBottomSheetOpen: false,
	type: 'login',
	openBottomSheet: (openingBottomSheet: BottomSheetType) =>
		set({ isBottomSheetOpen: true, type: openingBottomSheet }),
	closeBottomSheet: () => set({ isBottomSheetOpen: false }),
	setBottomSheetOpen: (isBottomSheetOpen: boolean) =>
		set({ isBottomSheetOpen }),
}));

const modalMappingNameWithComponent = {
	leave: {
		title: '작성 중인 내용이 있습니다.\n나가시겠습니까?',
		description: `해당 페이지를 벗어날 경우,\n지금까지 작성한 내용이 사라집니다.`,
	},
	cancellation: {
		title: '정말 회원탈퇴 하시겠습니까?',
		description: `계정의 복구는 불가하며,\n남아있는 포인트는 자동으로 소멸됩니다.`,
	},
};

type ModalType = keyof typeof modalMappingNameWithComponent;

type ModalStoreType = {
	isModalOpen: boolean;
	Modal: JSX.Element;
	openModal: (type: ModalType, buttons?: JSX.Element[]) => void;
	closeModal: () => void;
	handleModalOpen: (open: boolean) => void;
};

export const useModalStore = create<ModalStoreType>(set => ({
	isModalOpen: false,
	Modal: <></>,
	openModal: (type: ModalType, buttons) =>
		set({
			isModalOpen: true,
			Modal: (
				<Modal {...modalMappingNameWithComponent[type]} buttons={buttons} />
			),
		}),
	closeModal: () => set({ isModalOpen: false }),
	handleModalOpen: (open: boolean) => set({ isModalOpen: open }),
}));
