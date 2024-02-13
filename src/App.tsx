import { Routing } from '@components/common';
import GlobalComponents from '@components/common/GlobalComponents';
import GlobalSVGSprite from '@components/common/GlobalSVGSprite';

const App = () => {
	return (
		<>
			<GlobalSVGSprite />
			<Routing />
			<GlobalComponents />
		</>
	);
};

export default App;
