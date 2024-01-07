/** @type {import('tailwindcss').Config} */
import konstaConfig from 'konsta/config';
import colors from './src/constants/colors';
import { fonts } from './src/constants/typos';
import plugin from 'tailwindcss/plugin';

export default konstaConfig({
	content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
	darkMode: 'class',
	plugins: [
		plugin(({ addComponents }) => {
			addComponents(fonts);
		}),
	],
	konsta: {
		colors: colors,
		component: plugin(({ addComponents }) => {
			addComponents(fonts);
		}),
		fontSize: {
			Headline: '3xl',
		},
	},
	theme: {
		extends: {
			colors: colors,
			fontFamily: { SUIT: ['SUIT', 'sans-serif'] },
			plugins: [
				plugin(({ addComponents }) => {
					addComponents(fonts);
				}),
			],
			fontSize: {
				Headline: '3xl',
			},
		},
	},
});
