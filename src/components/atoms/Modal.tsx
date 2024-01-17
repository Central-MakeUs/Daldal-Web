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
	return (
		<Dialog open={isModalOpen} onOpenChange={handleModalOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="whitespace-pre-line typography-Body1 typography-M leading-normal">
						{title}
					</DialogTitle>
					<DialogDescription className="whitespace-pre-line typography-Body4 typography-M leading-normal">
						{description}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					{buttons?.map(button => <DialogClose asChild>{button}</DialogClose>)}
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
