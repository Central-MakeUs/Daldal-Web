import ApprovedTag from '@components/atoms/tag/ApprovedTag';

import NotApprovedTag from '../atoms/tag/NotApprovedTag';
import ProgressTag from '../atoms/tag/ProgressTag';

type ImageContainerProps = {
	imageUrl: string;
	status: 'APPROVED' | 'PROGRESS' | 'NOT_APPROVED';
};

const ImageContainer = ({ imageUrl, status }: ImageContainerProps) => {
	return (
		<div className="relative">
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
