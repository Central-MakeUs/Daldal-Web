import CustomToaster from '@components/atoms/CustomToaster';
import Routing from '@components/common/Routing';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
	return (
		<>
			<Routing />
			<CustomToaster className="px-3" />
		</>
	);
};

export default App;
