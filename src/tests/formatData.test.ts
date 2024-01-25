import { describe } from 'node:test';

import { getYoutubeIdFromUrl } from '@utils/formatData';
import { expect, test } from 'vitest';

describe('getYoutubeIdFromUrl 동작 테스트', () => {
	test('youtube url이 embed url일 때 id가 정상적으로 추출되는지 확인합니다.', () => {
		expect(
			getYoutubeIdFromUrl(['https://www.youtube.com/embed/8rSH8-pbHZ0']),
		).toBe('8rSH8-pbHZ0');
	});

	test('youtube url이 watch url일 때 id가 정상적으로 추출되는지 확인합니다.', () => {
		expect(
			getYoutubeIdFromUrl(['https://www.youtube.com/watch?v=8rSH8-pbHZ0']),
		).toBe('8rSH8-pbHZ0');
	});

	test('youtube url이 모바일 url일 때 id가 정상적으로 추출되는지 확인합니다.', () => {
		expect(
			getYoutubeIdFromUrl(['https://m.youtube.com/watch?v=8rSH8-pbHZ0']),
		).toBe('8rSH8-pbHZ0');
	});

	test('youtube url이 공유용 단축 url일 때 정상적으로 추출되는지 확인합니다.', () => {
		expect(
			getYoutubeIdFromUrl(['https://youtu.be/XrGhiSUvmwE?si=Tm66HqKpMB0GkPs0']),
		).toBe('XrGhiSUvmwE');
	});

	test('youtube url이 shorts url일 때 정상적으로 추출되는지 확인합니다.', () => {
		expect(
			getYoutubeIdFromUrl(['https://www.youtube.com/shorts/pMxtxlju3Ow']),
		).toBe('pMxtxlju3Ow');
	});
});
