import AccountBottomSheet from '@components/molecules/bottomSheet/AccountBottomSheet';
import LoginBottomSheet from '@components/molecules/bottomSheet/LoginBottomSheet';
import Home from '@pages/Home';
import ImageUpload from '@pages/ImageUpload';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import Withdrawal from '@pages/Withdrawal';
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
			<Route path="/withdrawal" component={Withdrawal} exact />
			<div className="w-full max-w-[600px] fixed bottom-0">
				<LoginBottomSheet />
				<AccountBottomSheet />
			</div>
			{Modal}
		</BrowserRouter>
	);
};

export default Routing;
