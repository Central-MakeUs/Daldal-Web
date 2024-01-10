import { Global, css } from '@storybook/theming';

const GlobalStyles = css`
	* {
		font-family: SUIT, 'Noto Sans KR', sans-serif !important;
	}
`;

export const GlobalStorybookStyles = () => <Global styles={GlobalStyles} />;
