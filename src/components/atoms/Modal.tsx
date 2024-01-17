import { ReactNode } from 'react';

import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogClose,
	DialogDescription,
	DialogTitle,
	DialogTrigger,
	DialogFooter,
} from '@components/ui/dialog';

type ModalProps = {
	title: string;
	description?: string;
	buttons?: ReactNode[];
};

const Modal = ({ title, description, buttons }: ModalProps) => {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<button>모달 열기</button>
			</DialogTrigger>
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
