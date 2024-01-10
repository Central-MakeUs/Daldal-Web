import { IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';

import Home from '@pages/Home';

import { buildAnimation } from '@utils/buildAnimation';

function Routing() {
	return (
		<IonReactRouter>
			<IonRouterOutlet animation={buildAnimation}>
				<Route path="/home" component={Home} exact={true} />
			</IonRouterOutlet>
		</IonReactRouter>
	);
}

export default Routing;
