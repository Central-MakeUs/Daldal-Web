import ApprovedTag from '@components/atoms/tag/ApprovedTag';

import NotApprovedTag from '../atoms/tag/NotApprovedTag';
import ProgressTag from '../atoms/tag/ProgressTag';

type ImageContainerProps = {
	imageUrl: string;
	status: 'APPROVED' | 'PROGRESS' | 'NOT_APPROVED';
	onClick: () => void;
};

const ImageContainer = ({ imageUrl, status, onClick }: ImageContainerProps) => {
	return (
		<div className="relative cursor-pointer" onClick={onClick}>
			<img
				src={imageUrl}
				className="relative rounded-[5px] object-cover aspect-square"
			/>
			<div className="absolute top-1 right-1">
				{status === 'APPROVED' && <ApprovedTag />}
				{status === 'PROGRESS' && <ProgressTag />}
				{status === 'NOT_APPROVED' && <NotApprovedTag />}
			</div>
		</div>
	);
};

export default ImageContainer;
