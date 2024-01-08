import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { KonstaProvider } from 'konsta/react';

import { buildProvidersTree } from '@utils/buildProvidersTree';
import { ComponentWithProps } from '@type/providerTree';
import { BrowserRouter } from 'react-router-dom';

const queryClient = new QueryClient();
const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
	[KonstaProvider],
	[BrowserRouter],
];

export const ProvidersTree = buildProvidersTree(providerWithProps);
