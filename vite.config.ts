import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tsconfigPaths()],
	resolve: {
		alias: [
			{ find: '@', replacement: path.resolve(__dirname, 'src') },
			{
				find: '@components',
				replacement: path.resolve(__dirname, 'src/components'),
			},
			{ find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
			{ find: '@styles', replacement: path.resolve(__dirname, 'src/styles') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
			{ find: '@types', replacement: path.resolve(__dirname, 'src/types') },
			{ find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
			{
				find: '@contants',
				replacement: path.resolve(__dirname, 'src/contants'),
			},
			{ find: '@stores', replacement: path.resolve(__dirname, 'src/stores') },
		],
	},
});
