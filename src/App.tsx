import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route } from 'react-router-dom';
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
import Home from '@pages/Home';
import { buildAnimation } from '@utils/buildAnimation';

setupIonicReact();

function App() {
	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet animation={buildAnimation}>
					<Route path="/home" component={Home} exact={true} />
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
