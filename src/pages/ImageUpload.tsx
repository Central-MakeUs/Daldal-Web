import ImageUploadButton from '@components/atoms/ImageUploadButton';
import ImageContainer from '@components/molecules/ImageContainer';
import PageLayout from '@layouts/PageLayout';
import { uploadImages } from '@mocks/uploadImages';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
	const navigate = useNavigate();

	const handleClick = (imageId: number) => {
		navigate(`/image-upload/${imageId}`);
	};

	return (
		<PageLayout leftType="back" className="px-6 py-3">
			<div className="mb-3 flex flex-col gap-1 typography-Body1 typography-M">
				<h1 className="text-White">사진은 꼭</h1>
				<h1 className="text-Primary">제품명과 결제시간</h1>
				<h1 className="text-White">이 나오게 업로드 부탁드립니다.</h1>
			</div>
			<p className="mb-6 typography-Body4 typography-R text-Gray20">
				환급은 영업일 기준 48시간 이내에 검토되며, <br />
				지그재그 내에서 '구매확정'을 누른 후, <br />
				2주 이내 포인트가 환급됩니다.
			</p>
			<div className="grid grid-cols-3 gap-[11px]">
				<ImageUploadButton />
				{uploadImages.map((image, idx) => (
					<ImageContainer
						key={`imageContainer${idx}`}
						imageUrl={image.image}
						status={image.tag}
						onClick={() => handleClick(10)}
					/>
				))}
			</div>
		</PageLayout>
	);
};

export default ImageUpload;
