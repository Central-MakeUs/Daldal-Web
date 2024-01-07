import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '@/index.css';
import App from 'App';
import { ProvidersTree } from 'components/ProvidersTree.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ProvidersTree>
			<App />
			<ReactQueryDevtools initialIsOpen={false} />
		</ProvidersTree>
	</React.StrictMode>,
);
