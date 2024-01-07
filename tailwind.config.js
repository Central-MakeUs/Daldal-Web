/** @type {import('tailwindcss').Config} */
import konstaConfig from 'konsta/config';
import colors from './src/constants/colors';

export default konstaConfig({
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'class',
	konsta: {
		colors: colors,
	},
	theme: {
		colors: colors,
	},
	plugins: [],
});
