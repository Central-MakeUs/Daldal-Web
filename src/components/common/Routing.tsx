import LoginBottomSheet from '@components/molecules/LoginBottomSheet';
import Home from '@pages/Home';
import ImageUpload from '@pages/ImageUpload';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import Withdraw from '@pages/Withdraw';
import { useModalStore } from '@stores/layerStore';
import { BrowserRouter, Route } from 'react-router-dom';

const Routing = () => {
	const { Modal } = useModalStore();

	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/home" component={Home} exact />
			<Route path="/my-page" component={MyPage} exact />
			<Route path="/point" component={Point} exact />
			<Route path="/image-upload" component={ImageUpload} exact />
			<Route path="/withdraw" component={Withdraw} exact />
			<div className="w-full max-w-[600px] fixed bottom-0">
				<LoginBottomSheet />
			</div>
			{Modal}
		</BrowserRouter>
	);
};

export default Routing;
