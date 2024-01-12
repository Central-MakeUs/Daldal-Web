import React from 'react';
import type { Preview } from '@storybook/react';
import { setupIonicReact } from '@ionic/react';

import { GlobalStorybookStyles } from '../src/components/common/GlobalStorybookStyles';
import { loadFontsForStorybook } from '../src/utils/loadFontsForStorybook';

import 'tailwindcss/tailwind.css';
import '@ionic/react/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

setupIonicReact();
loadFontsForStorybook();

const withGlobalStyle = storyFn => (
	<>
		<GlobalStorybookStyles />
		{storyFn()}
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
