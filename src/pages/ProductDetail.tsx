import { useState } from 'react';

import { BuyWithLikeButton, CardInfo } from '@components/atoms';
import { SmallProductDetailImageSlider } from '@components/molecules';
import { ImageSliderContainer } from '@components/organisms';
import { useGetProductDetailList } from '@hooks/apis/product';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
// import { mockProductDetailData } from '@mocks/product';
import { getYoutubeIdFromUrl } from '@utils/formatData';
import { useParams } from 'react-router-dom';
import YouTube from 'react-youtube';

const ProductDetail = () => {
	const { productId } = useParams();

	const productIdAsNumber = parseInt(productId ?? '0', 10);
	const { data: productDetail } = useGetProductDetailList(productIdAsNumber);

	const { imageUrls, title, price, refund, videoUrls, redirectUrl, isDib } =
		productDetail;

	const [isDetailImageSliderOpen, setIsDetailImageSliderOpen] = useState(false);

	const openDetailImageSlider = () => {
		setIsDetailImageSliderOpen(true);
	};

	const closeDetailImageSlider = () => {
		setIsDetailImageSliderOpen(false);
	};

	const textWithEnter = {
		moreTitle: '💕지그재그 내의 리뷰를 통해\n더 자세히 알아보세요!',
		moreDescription:
			"*구매는 '달달쇼핑' 내의 구매하기 버튼을 이용해야\n환급액을 받으실 수 있어요!",
	};

	if (isDetailImageSliderOpen) {
		return (
			<ImageSliderContainer
				handleClose={closeDetailImageSlider}
				images={imageUrls}
			/>
		);
	}

	return (
		<PageLayout leftType="back">
			<SmallProductDetailImageSlider
				images={imageUrls}
				handleOpenDetailImageSlider={openDetailImageSlider}
			/>
			<div className="p-5 flex flex-col gap-5">
				<CardInfo
					title={title}
					price={price}
					paybackPrice={refund}
					size="large"
					category="의류"
				/>
				{videoUrls.length > 0 && (
					<div className="w-full relative flex flex-col gap-[10px]">
						<h3 className="text-White typography-Body2 typography-SB">
							❣️ 유저들의 달달한 리뷰 확인하기
						</h3>
						<YouTube
							videoId={getYoutubeIdFromUrl(videoUrls)}
							opts={{
								height: '100%',
								width: '100%',
							}}
							className="h-full aspect-video"
						/>
					</div>
				)}
				<div className="whitespace-pre-line">
					<h3 className="text-White typography-Body2 typography-SB">
						{textWithEnter.moreTitle}
					</h3>
					<h6 className="text-Error mt-2 mb-3 typography-Body4 typography-R">
						{textWithEnter.moreDescription}
					</h6>
					<iframe
						//src={"https://zigzag.kr/catalog/products/127482963"}
						//src={"https://s.zigzag.kr/f2KRWpFiXx?tab=review"}
						//src={"https://zigzag.kr/p/129629101?airbridge_referrer=airbridge%3Dtrue%26event_uuid%3D47b4ac24-c9aa-4c86-ab80-ecc332b39550%26client_id%3Dbdb7987c-7f89-414a-b8a8-f9746d7bb5e1%26referrer_timestamp%3D1707217989839%26channel%3Dsharelink%26campaign%3Dproduct%26ad_group%3Dnormal%26tab%3Dreview&utm_source=sharelink&utm_campaign=product&channel=sharelink&campaign=product&ad_group=normal&deeplink_url=zigzag%3A%2F%2F%2Fproduct_detail%3Fbrowsing_type%3DINTERNAL_BROWSER%26catalog_product_id%3D129629101%26url%3Dhttps%3A%2F%2Fstore.zigzag.kr%2Fapp%2Fcatalog%2Fproducts%2F129629101%3Fbrowsing_type%26shop_id%3D12897%26shop_product_no%3D%26uau%3D1b7555c0-fe6f-43f6-bd39-403fb6be7d61%26catalog_product_id%3D129629101&fallback_desktop=https%3A%2F%2Fzigzag.kr%2Fp%2F129629101&tab=review"}
						//src={"https://zigzag.kr/catalog/products/127482963?tab=review"}
						src={redirectUrl}
						className="w-full aspect-[1/2] border-Gray60 rounded-3xl border-[7px]"
					/>
				</div>
			</div>
			<FixedBottomLayout
				height={'h-[96px]'}
				childrenPadding={'py-3 pl-4 pr-3'}
				bottom="bottom-0"
			>
				<BuyWithLikeButton like={isDib} />
			</FixedBottomLayout>
		</PageLayout>
	);
};

export default ProductDetail;
