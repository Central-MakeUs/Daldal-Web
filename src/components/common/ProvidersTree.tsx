import { KonstaProvider } from 'konsta/react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ComponentWithProps } from '@type/providerTree';
import { buildProvidersTree } from '@utils/buildProvidersTree';

const queryClient = new QueryClient();
const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
	[KonstaProvider],
];

export const ProvidersTree = buildProvidersTree(providerWithProps);
