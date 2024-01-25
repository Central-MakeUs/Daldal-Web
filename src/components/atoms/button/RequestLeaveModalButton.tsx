import { useModalStore } from '@stores/layerStore';

const RequestLeaveModalButton = () => {
	const { openModal } = useModalStore();
	const handleClickRequestLeaveModalButton = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		e.preventDefault();
		openModal('leave');
	};

	return (
		<div
			className="w-6 h-6 cursor-pointer py-4 fixed top-[14px] z-30"
			onClick={handleClickRequestLeaveModalButton}
		/>
	);
};

export default RequestLeaveModalButton;
