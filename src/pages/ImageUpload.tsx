import ImageUploadButton from '@components/atoms/ImageUploadButton';
import ImageContainer from '@components/molecules/ImageContainer';
import PageLayout from '@components/templates/PageLayout';

const ImageUpload = () => {
	return (
		<PageLayout leftType="back" className="p-6 grid grid-cols-3 gap-[11px]">
			<ImageUploadButton />
			<ImageContainer
				imageUrl="https://via.placeholder.com/2560x1440"
				status="APPROVED"
				onClick={() => console.log('test')}
			/>
			<ImageContainer
				imageUrl="https://via.placeholder.com/2560x1440"
				status="APPROVED"
				onClick={() => console.log('test')}
			/>
			<ImageContainer
				imageUrl="https://via.placeholder.com/2560x1440"
				status="NOT_APPROVED"
				onClick={() => console.log('test')}
			/>
			<ImageContainer
				imageUrl="https://via.placeholder.com/2560x1440"
				status="PROGRESS"
				onClick={() => console.log('test')}
			/>
			<ImageContainer
				imageUrl="https://via.placeholder.com/2560x1440"
				status="NOT_APPROVED"
				onClick={() => console.log('test')}
			/>
		</PageLayout>
	);
};

export default ImageUpload;
