import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@pages/Home';
import MyPage from '@pages/MyPage';

function Routing() {
	return (
		<BrowserRouter>
			<Route path="/home" component={Home} exact={true} />
			<Route path="/" component={Home} exact />
			<Route path="/my-page" component={MyPage} exact />
		</BrowserRouter>
	);
}

export default Routing;
