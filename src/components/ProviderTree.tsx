import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type ComponentWithProps = [
	Provider: React.ElementType,
	props?: Record<string, unknown>
];

const queryClient = new QueryClient();

const buildProvidersTree = (componentsWithProps: ComponentWithProps[]) => {
	const initialComponent = ({
		children,
	}: {
		children: React.ReactNode;
	}) => <>{children}</>;
	return componentsWithProps.reduce(
		(AccumulatedComponents, [Provider, props = {}]) => {
			return ({
				children,
			}: {
				children: React.ReactNode;
			}) => {
				return (
					<AccumulatedComponents>
						<Provider {...props}>
							{children}
						</Provider>
					</AccumulatedComponents>
				);
			};
		},
		initialComponent
	);
};

export const ProvidersTree = buildProvidersTree([
	[QueryClientProvider, { client: queryClient }],
]);
