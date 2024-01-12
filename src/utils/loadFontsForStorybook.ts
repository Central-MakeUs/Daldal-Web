import { fontUrl } from '@constants/typos';

const fontLinkId = 'storybook-font-link-tag';

export const loadFontsForStorybook = () => {
	if (!document.getElementById(fontLinkId)) {
		const fontLink = document.createElement('link');

		fontLink.id = fontLinkId;
		fontLink.href = fontUrl;
		fontLink.rel = 'stylesheet';
		fontLink.type = 'text/css';

		document.head.appendChild(fontLink);
	}
};
