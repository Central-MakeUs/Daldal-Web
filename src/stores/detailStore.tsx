import { Status } from '@type/status';
import { create } from 'zustand';

type ImageUploadDetailStoreType = {
	//Todo: 서버에서 받는 값을 key로 교체
	clickedStatus: Status;
	setClickedStatus: (status: Status) => void;
};

export const useImageUploadDetailStore = create<ImageUploadDetailStoreType>(
	set => ({
		clickedStatus: 'APPROVED',
		setClickedStatus: (status: Status) => set({ clickedStatus: status }),
	}),
);
