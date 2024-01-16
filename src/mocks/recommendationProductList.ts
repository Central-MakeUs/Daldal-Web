import { mockImages } from '@mocks/images';

export const mockRecommendationProductList = mockImages.map((image, index) => ({
	id: index,
	image,
	title:
		'(숏,기본,롱/핵따뜻!) 골덴 밍크융기모 코듀로이 밴딩와이드팬츠 트레이닝팬츠 6color + 조거ver 추가',
	price: 9900,
	paybackPrice: 3000,
	isFullHeart: index % 3 === 0,
}));
