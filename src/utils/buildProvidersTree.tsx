import { ReactNode } from 'react';

import { ComponentWithPropsArray } from '@type/providerTree';

type Children = {
	children: ReactNode;
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
