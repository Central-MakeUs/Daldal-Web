import UploadButton from '@components/atoms/imageUpload/UploadButton';
import PageLayout from '@components/templates/PageLayout';

const ImageUpload = () => {
	return (
		<div>
			<PageLayout leftType="back">
				<div className="grid grid-cols-3 gap-[11px]">
					<UploadButton />
					<UploadButton />
					<UploadButton />
				</div>
			</PageLayout>
		</div>
	);
};

export default ImageUpload;
