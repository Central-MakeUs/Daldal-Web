import CustomToaster from '@components/atoms/CustomToaster';
import Routing from '@components/common/Routing';

const App = () => {
	return (
		<>
			<Routing />
			<CustomToaster className="px-3" />
		</>
	);
};

export default App;
