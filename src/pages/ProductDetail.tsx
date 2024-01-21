import { useState } from 'react';

import BuyWithLikeButton from '@components/atoms/BuyWithLikeButton';
import CardInfo from '@components/atoms/card/CardInfo';
import SmallProductDetailImageSlider from '@components/molecules/imageSlider/SmallProductDetailImageSlider';
import ImageSliderContainer from '@components/organisms/imageSlider/ImageSliderContainer';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { mockProductData } from '@mocks/product';
import { getYoutubeIdFromUrl } from '@utils/formatData';
import YouTube from 'react-youtube';

const ProductDetail = () => {
	// const { productId } = useParams();
	// TODO: productId를 이용해 상품 정보를 가져온다.
	const {
		images,
		title,
		price,
		refund: paybackPrice,
		video,
		url,
	} = mockProductData;

	const [isDetailImageSliderOpen, setIsDetailImageSliderOpen] = useState(false);

	const openDetailImageSlider = () => {
		setIsDetailImageSliderOpen(true);
	};

	const closeDetailImageSlider = () => {
		setIsDetailImageSliderOpen(false);
	};

	if (isDetailImageSliderOpen) {
		return (
			<ImageSliderContainer
				handleClose={closeDetailImageSlider}
				images={images}
			/>
		);
	}

	return (
		<PageLayout leftType="back">
			<SmallProductDetailImageSlider
				images={images}
				handleOpenDetailImageSlider={openDetailImageSlider}
			/>
			<div className="p-5 flex flex-col gap-5">
				<CardInfo
					title={title}
					price={price}
					paybackPrice={paybackPrice}
					size="large"
					category="의류"
				/>
				<div className="w-full aspect-video relative">
					<YouTube
						videoId={getYoutubeIdFromUrl(video)}
						opts={{
							height: '100%',
							width: '100%',
						}}
						className="h-full w-full rounded-s overflow-hidden"
					/>
				</div>
			</div>
			<iframe src={url} className="w-full aspect-square" />
			<FixedBottomLayout height={'h-[96px]'} childrenPadding={'bg-Gray90'}>
				<BuyWithLikeButton like={false} />
			</FixedBottomLayout>
		</PageLayout>
	);
};

export default ProductDetail;
