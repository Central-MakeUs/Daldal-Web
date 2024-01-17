import ImageUploadButton from '@components/atoms/ImageUploadButton';
import ImageContainer from '@components/molecules/ImageContainer';
import PageLayout from '@components/templates/PageLayout';

const ImageUpload = () => {
	return (
		<div>
			<PageLayout leftType="back">
				<div className="grid grid-cols-3 gap-[11px]">
					<ImageUploadButton />
					<ImageContainer
						imageUrl="https://via.placeholder.com/2560x1440"
						status="APPROVED"
					/>
					<ImageContainer
						imageUrl="https://via.placeholder.com/2560x1440"
						status="APPROVED"
					/>
					<ImageContainer
						imageUrl="https://via.placeholder.com/2560x1440"
						status="NOT_APPROVED"
					/>
					<ImageContainer
						imageUrl="https://via.placeholder.com/2560x1440"
						status="PROGRESS"
					/>
					<ImageContainer
						imageUrl="https://via.placeholder.com/2560x1440"
						status="NOT_APPROVED"
					/>
				</div>
			</PageLayout>
		</div>
	);
};

export default ImageUpload;
