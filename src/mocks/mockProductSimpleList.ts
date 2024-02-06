import { mockImages } from '@mocks/images';
import { ProductSimpleList } from '@models/product/entity/product';

export const mockProductSimpleList: ProductSimpleList = mockImages.map(
	(image, index) => ({
		id: index,
		thumbnailUrl: image,
		title:
			'(숏,기본,롱/핵따뜻!) 골덴 밍크융기모 코듀로이 밴딩와이드팬츠 트레이닝팬츠 6color + 조거ver 추가',
		price: 9900,
		refund: 3000,
		isDib: index % 3 === 0,
	}),
);
