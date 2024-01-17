import { Button } from 'konsta/react';

import ToastMessageLikeOrDelete from '@components/atoms/ToastMessageLikeOrDelete';
import LoginBottomSheet from '@components/molecules/LoginBottomSheet';
import Home from '@pages/Home';
import ImageUpload from '@pages/ImageUpload';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import { useBottomSheetStore } from '@stores/layerStore';
import toast from 'react-hot-toast';
import { BrowserRouter, Route } from 'react-router-dom';

const Routing = () => {
	const { isBottomSheetOpen } = useBottomSheetStore();

	const handleClick = () => {
		toast(() => <ToastMessageLikeOrDelete like={true} />);
	};

	return (
		<BrowserRouter>
			<Route path="/" component={Home} exact />
			<Route path="/home" component={Home} exact />
			<Route path="/my-page" component={MyPage} exact />
			<Route path="/point" component={Point} exact />
			<Route path="/image-upload" component={ImageUpload} exact />
			<div className="w-full max-w-[600px] fixed bottom-0">
				{isBottomSheetOpen && <LoginBottomSheet />}
				<Button onClick={handleClick}>toast 생성</Button>
			</div>
		</BrowserRouter>
	);
};

export default Routing;
