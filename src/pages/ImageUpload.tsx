import { ImageUploadButton } from '@components/atoms';
import { ImageContainer } from '@components/molecules';
import { useGetImageUploadSimpleList } from '@hooks/apis/imageUpload';
import PageLayout from '@layouts/PageLayout';
import { useNavigate } from 'react-router-dom';

const ImageUpload = () => {
	const navigate = useNavigate();

	const { data } = useGetImageUploadSimpleList();

	const handleClick = (imageId: number) => {
		navigate(`/image-upload/${imageId}`);
	};

	const title = [
		'사진은 꼭',
		'제품명과 결제시간',
		'이 나오게 업로드 부탁드립니다.',
	];
	const description =
		"환급은 영업일 기준 48시간 이내에 검토되며,\n지그재그 내에서 '구매확정'을 누른 후,\n2주 이내 포인트가 환급됩니다.";

	return (
		<PageLayout leftType="back" className="px-6 py-3">
			<div className="mb-3 flex flex-col gap-1 typography-Body1 typography-M">
				<h1 className="text-White">{title[0]}</h1>
				<h1 className="text-Primary">{title[1]}</h1>
				<h1 className="text-White">{title[2]}</h1>
			</div>
			<p className="mb-6 typography-Body4 typography-R text-Gray20 whitespace-pre-line">
				{description}
			</p>
			<div className="grid grid-cols-3 gap-[11px]">
				<ImageUploadButton />
				{data?.pages[0].data.buyResponses &&
					data?.pages[0].data.buyResponses.map((item, idx) => (
						<ImageContainer
							key={`imageContainer${idx}`}
							imageUrl={item.certImageUrl}
							status={item.refundStatus}
							onClick={() => handleClick(item.id)}
						/>
					))}
			</div>
		</PageLayout>
	);
};

export default ImageUpload;
