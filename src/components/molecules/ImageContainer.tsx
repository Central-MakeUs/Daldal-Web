import { ApprovedTag, NotApprovedTag, ProgressTag } from '@components/atoms';
import { Status } from '@type/status';

type ImageContainerProps = {
	imageUrl: string;
	status: Status;
	onClick: () => void;
};

const ImageContainer = ({ imageUrl, status, onClick }: ImageContainerProps) => {
	return (
		<div className="relative cursor-pointer" onClick={onClick}>
			<img
				src={imageUrl}
				className="w-full relative rounded-[5px] object-cover aspect-square"
			/>
			<div className="absolute top-1 right-1">
				{status === 'APPROVED' && <ApprovedTag size="small" />}
				{status === 'PROGRESS' && <ProgressTag size="small" />}
				{status === 'NOT_APPROVED' && <NotApprovedTag size="small" />}
			</div>
		</div>
	);
};

export default ImageContainer;
