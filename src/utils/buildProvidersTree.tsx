import { ComponentWithPropsArray } from '../types/providerTree';

type Children = {
	children: React.ReactNode;
};

export const buildProvidersTree = (
	componentsWithProps: ComponentWithPropsArray,
) => {
	const initialComponent = ({ children }: Children) => <>{children}</>;
	return componentsWithProps.reduce(
		(AccumulatedComponents, [Provider, props = {}]) => {
			return ({ children }: Children) => {
				return (
					<AccumulatedComponents>
						<Provider {...props}>{children}</Provider>
					</AccumulatedComponents>
				);
			};
		},
		initialComponent,
	);
};
