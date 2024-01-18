import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '@components',
				replacement: '/src/components',
			},
			{ find: '@hooks', replacement: '/src/hooks' },
			{ find: '@pages', replacement: '/src/pages' },
			{ find: '@styles', replacement: '/src/styles' },
			{ find: '@utils', replacement: '/src/utils' },
			{ find: '@type', replacement: '/src/type' },
			{ find: '@assets', replacement: '/src/assets' },
			{
				find: '@constants',
				replacement: '/src/constants',
			},
			{ find: '@stores', replacement: '/src/stores' },
			{ find: '@models', replacement: '/src/models' },
			{ find: '@contexts', replacement: '/src/contexts' },
			{ find: '@mocks', replacement: '/src/mocks' },
			{ find: '@tests', replacement: '/src/tests' },
			{ find: '@apis', replacement: '/src/apis' },
			{ find: '@layouts', replacement: '/src/layouts' },
			{ find: '@', replacement: '/src' },
		],
	},
});
