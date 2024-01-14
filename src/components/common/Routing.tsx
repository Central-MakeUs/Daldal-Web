import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@pages/Home';

function Routing() {
	return (
		<BrowserRouter>
			<Route path="/home" component={Home} exact={true} />
		</BrowserRouter>
	);
}

export default Routing;
