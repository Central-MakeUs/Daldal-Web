import { ApprovedTag, NotApprovedTag, ProgressTag } from '@components/atoms';
import { RefundStatus } from '@type/refundStatus';

type ImageContainerProps = {
	imageUrl: string;
	status: RefundStatus;
	onClick: () => void;
};

const ImageContainer = ({ imageUrl, status, onClick }: ImageContainerProps) => {
	return (
		<div
			className="relative cursor-pointer w-full aspect-square"
			onClick={onClick}
		>
			<img
				src={imageUrl}
				className="relative rounded-[5px] object-cover w-full h-full aspect-square"
			/>
			<div className="absolute top-1 right-1">
				{status === 'COMPLETED' && <ApprovedTag size="small" />}
				{status === 'IN_PROGRESS' && <ProgressTag size="small" />}
				{status === 'REJECTED' && <NotApprovedTag size="small" />}
			</div>
		</div>
	);
};

export default ImageContainer;
