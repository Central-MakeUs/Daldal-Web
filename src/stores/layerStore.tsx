import DefaultButton from '@components/atoms/button/DefaultButton';
import Modal from '@components/atoms/Modal';
import { create } from 'zustand';

type BottomSheetType = 'login';

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
		buttons: [
			<DefaultButton
				color={{
					textColor: 'White',
					bgColor: 'Primary',
				}}
				title="머무르기"
				size="small"
				onClick={() => console.log('머무르기 클릭')}
			/>,
			<DefaultButton
				title="이동하기"
				size="small"
				color={{
					textColor: 'Primary',
					bgColor: 'White',
					borderColor: 'Primary',
				}}
				onClick={() => console.log('이동하기 클릭')}
			/>,
		],
	},
};

type ModalType = keyof typeof modalMappingNameWithComponent;

type ModalStoreType = {
	isModalOpen: boolean;
	modal: JSX.Element;
	openModal: (type: ModalType) => void;
	closeModal: () => void;
	handleModalOpen: (open: boolean) => void;
};

export const useModalStore = create<ModalStoreType>(set => ({
	isModalOpen: false,
	modal: <></>,
	openModal: (type: ModalType) =>
		set({
			isModalOpen: true,
			modal: <Modal {...modalMappingNameWithComponent[type]} />,
		}),
	closeModal: () => set({ isModalOpen: false }),
	handleModalOpen: (open: boolean) => set({ isModalOpen: open }),
}));
