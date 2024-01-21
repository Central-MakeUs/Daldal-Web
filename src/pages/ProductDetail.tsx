import BuyWithLikeButton from '@components/atoms/BuyWithLikeButton';
import CardInfo from '@components/atoms/card/CardInfo';
import SmallProductDetailImageSlider from '@components/molecules/imageSlider/SmallProductDetailImageSlider';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { mockImages } from '@mocks/images';
import YouTube from 'react-youtube';

const ProductDetail = () => {
	return (
		<PageLayout leftType="back">
			<SmallProductDetailImageSlider images={mockImages} />
			<div className="p-5 flex flex-col gap-5">
				<CardInfo
					title="바토 볼레로 스퀘어넥 겨울 루즈핏 니트 (4color) 연말룩/데이트룩/하객룩"
					price={19000}
					paybackPrice={3000}
					size="large"
					category="의류"
				/>
				<div className="w-full aspect-video relative">
					<YouTube
						videoId="2g811Eo7K8U"
						opts={{
							height: '100%',
							width: '100%',
						}}
						className="h-full w-full rounded-s overflow-hidden"
					/>
				</div>
			</div>
			<iframe
				src="https://zigzag.kr/catalog/products/127482963"
				className="w-full aspect-square"
			/>
			<FixedBottomLayout height={'h-[96px]'} childrenPadding={'bg-Gray90'}>
				<BuyWithLikeButton like={false} />
			</FixedBottomLayout>
		</PageLayout>
	);
};

export default ProductDetail;
