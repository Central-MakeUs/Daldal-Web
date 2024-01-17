import ImageUploadButton from '@components/atoms/ImageUploadButton';
import PageLayout from '@components/templates/PageLayout';

const ImageUpload = () => {
	return (
		<div>
			<PageLayout leftType="back">
				<div className="grid grid-cols-3 gap-[11px]">
					<ImageUploadButton />
					<ImageUploadButton />
					<ImageUploadButton />
				</div>
			</PageLayout>
		</div>
	);
};

export default ImageUpload;
