import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { buildProvidersTree } from '../utils/buildProvidersTree';

import { ComponentWithProps } from '../types/providerTree';

const queryClient = new QueryClient();
const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
];

export const ProvidersTree = buildProvidersTree(providerWithProps);
