import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ComponentWithProps } from "../types/providerTree";
import { buildProvidersTree } from "../utils/buildProvidersTree";

const queryClient = new QueryClient();
const providerWithProps: ComponentWithProps[] = [
	[QueryClientProvider, { client: queryClient }],
];

export const ProvidersTree = buildProvidersTree(providerWithProps);
