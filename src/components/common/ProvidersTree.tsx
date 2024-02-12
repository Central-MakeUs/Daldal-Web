import { KonstaProvider, Preloader } from 'konsta/react';
import { Suspense } from 'react';

import Error from '@pages/Error';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ComponentWithProps } from '@type/providerTree';
import { buildProvidersTree } from '@utils/buildProvidersTree';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
			refetchOnWindowFocus: false,
			retry: false,
		},
		mutations: {
			throwOnError: true,
		},
	},
});

const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
	[KonstaProvider],
	[BrowserRouter],
	[
		ErrorBoundary,
		{
			FallbackComponent: Error,
			onReset: () => {
				window.location.reload();
			},
		},
	],
	[Suspense, { fallback: <Preloader className="k-color-Primary" /> }],
];

const ProvidersTree = buildProvidersTree(providerWithProps);
export default ProvidersTree;
