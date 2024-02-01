import { Routing } from '@components/common';
import { ErrorBoundary } from 'react-error-boundary';

import { Error } from './pages';

const App = () => {
	return (
		<ErrorBoundary FallbackComponent={Error}>
			<Routing />
		</ErrorBoundary>
	);
};

export default App;
