import { ReactNode } from 'react';

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogClose,
	DialogDescription,
	DialogTitle,
	DialogFooter,
} from '@components/ui/dialog';
import { useModalStore } from '@stores/layerStore';

export type ModalProps = {
	title: string;
	description?: string;
	buttons?: ReactNode[];
};

const Modal = ({ title, description, buttons }: ModalProps) => {
	const { isModalOpen, handleModalOpen } = useModalStore();

	if (!isModalOpen) {
		return null;
	}

	return (
		<Dialog open={isModalOpen} onOpenChange={handleModalOpen}>
			<DialogContent className="w-[calc(100%-24px)] w-max-[576px] rounded-xl box-border">
				<DialogHeader>
					<DialogTitle className="whitespace-pre-line typography-Body1 typography-M leading-normal text-left">
						{title}
					</DialogTitle>
					<DialogDescription className="whitespace-pre-line typography-Body4 typography-M leading-normal text-left">
						{description}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter className="flex flex-row gap-2">
					{buttons?.map(button => <DialogClose asChild>{button}</DialogClose>)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
