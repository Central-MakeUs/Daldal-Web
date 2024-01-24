import { ProvidersTree } from '@components/common';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';

import App from './App';

import '@/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ProvidersTree>
		<App />
		<ReactQueryDevtools initialIsOpen={false} />
	</ProvidersTree>,
);
