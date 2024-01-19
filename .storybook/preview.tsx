import React from 'react';
import type { Preview } from '@storybook/react';
import { KonstaProvider } from 'konsta/react';

import { GlobalStorybookStyles } from '../src/components/common/GlobalStorybookStyles';
import { loadFontsForStorybook } from '../src/utils/loadFontsForStorybook';

import 'tailwindcss/tailwind.css';
loadFontsForStorybook();

const withGlobalStyle = storyFn => (
	<>
		<KonstaProvider>
			<GlobalStorybookStyles />
			{storyFn()}
		</KonstaProvider>
	</>
);

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	decorators: [
		withGlobalStyle,
		Story => (
			<div className="p-4">
				<Story />
			</div>
		),
	],
};

export default preview;
