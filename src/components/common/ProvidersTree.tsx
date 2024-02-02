import { KonstaProvider } from 'konsta/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ComponentWithProps } from '@type/providerTree';
import { buildProvidersTree } from '@utils/buildProvidersTree';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			throwOnError: true,
			refetchOnWindowFocus: false,
		},
		mutations: {
			throwOnError: true,
		},
	},
});

const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
	[KonstaProvider],
];

const ProvidersTree = buildProvidersTree(providerWithProps);
export default ProvidersTree;
