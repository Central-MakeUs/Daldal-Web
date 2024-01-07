import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { KonstaProvider } from 'konsta/react';

import { buildProvidersTree } from '../utils/buildProvidersTree';
import { ComponentWithProps } from '../types/providerTree';

const queryClient = new QueryClient();
const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
	[KonstaProvider],
];

export const ProvidersTree = buildProvidersTree(providerWithProps);
