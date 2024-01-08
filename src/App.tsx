import {
	IonApp,
	IonRouterOutlet,
	setupIonicReact,
	createAnimation,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
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
import Hello from '@pages/Hello';
import Home from '@pages/Home';

setupIonicReact();

function App() {
	const animationBuilder = (
		_baseEl: unknown,
		opts: {
			enteringEl: Element | Node | Element[] | Node[] | NodeList;
			leavingEl: Element | Node | Element[] | Node[] | NodeList;
		},
	) => {
		const enteringAnimation = createAnimation()
			.addElement(opts.enteringEl)
			.fromTo('opacity', 0, 1)
			.duration(250);

		const leavingAnimation = createAnimation()
			.addElement(opts.leavingEl)
			.fromTo('opacity', 1, 0)
			.duration(250);

		const animation = createAnimation()
			.addAnimation(enteringAnimation)
			.addAnimation(leavingAnimation);

		return animation;
	};

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet animation={animationBuilder}>
					<Route exact path="/home">
						<Home />
					</Route>
					<Route exact path="/">
						<Redirect to="/home" />
					</Route>
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	);
}

export default App;
