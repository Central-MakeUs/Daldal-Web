import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from '@pages/Home';

import { buildAnimation } from '@utils/buildAnimation';

function Routing() {
	return (
		<IonReactRouter>
			<IonRouterOutlet animation={buildAnimation}>
				<BrowserRouter>
					<Route path="/home" component={Home} exact={true} />
				</BrowserRouter>
			</IonRouterOutlet>
		</IonReactRouter>
	);
}

export default Routing;
