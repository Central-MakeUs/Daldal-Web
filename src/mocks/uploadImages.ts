import { mockImages } from './images';
import { tags } from './tags';

export const uploadImages = mockImages.map((image, idx) => ({
	id: idx,
	image,
	tag: tags[idx],
}));
