import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';

function Routing() {
	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/home" component={Home} exact />
			<Route path="/my-page" component={MyPage} exact />
			<Route path="/point" component={Point} exact />
		</BrowserRouter>
	);
}

export default Routing;
