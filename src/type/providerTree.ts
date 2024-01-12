import { ElementType } from 'react';

export type ComponentWithProps = [
	Provider: ElementType,
	props?: Record<string, unknown>,
];

export type ComponentWithPropsArray = ComponentWithProps[];
