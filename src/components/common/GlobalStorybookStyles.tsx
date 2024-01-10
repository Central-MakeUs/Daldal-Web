import { Global, css } from '@storybook/theming';

export const fontUrl =
	'https://cdn.jsdelivr.net/gh/sun-typeface/SUIT/fonts/static/woff2/SUIT.css';

const GlobalStyles = css`
	* {
		font-family: SUIT, 'Noto Sans KR', sans-serif !important;
	}
`;
export const GlobalStyle = () => <Global styles={GlobalStyles} />;
