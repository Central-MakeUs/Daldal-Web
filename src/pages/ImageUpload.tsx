import ImageUploadButton from '@components/atoms/ImageUploadButton';
import ImageContainer from '@components/molecules/ImageContainer';
import PageLayout from '@layouts/PageLayout';
import { uploadImages } from '@mocks/uploadImages';

const ImageUpload = () => {
	return (
		<PageLayout leftType="back" className="p-6 grid grid-cols-3 gap-[11px]">
			<ImageUploadButton />
			{uploadImages.map((image, idx) => (
				<ImageContainer
					key={`imageContainer${idx}`}
					imageUrl={image.image}
					status={image.tag}
					onClick={() => console.log('test')}
				/>
			))}
		</PageLayout>
	);
};

export default ImageUpload;
