import LoginBottomSheet from '@components/molecules/LoginBottomSheet';
import Home from '@pages/Home';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import { useBottomSheetStore } from '@stores/layerStore';
import { BrowserRouter, Route } from 'react-router-dom';

const Routing = () => {
	const { isBottomSheetOpen } = useBottomSheetStore();

	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/home" component={Home} exact />
			<Route path="/my-page" component={MyPage} exact />
			<Route path="/point" component={Point} exact />
			<div className="w-full max-w-[600px] fixed bottom-0">
				{isBottomSheetOpen && <LoginBottomSheet />}
			</div>
		</BrowserRouter>
	);
};

export default Routing;
