import AccountBottomSheet from '@components/molecules/bottomSheet/AccountBottomSheet';
import BankBottomSheet from '@components/molecules/bottomSheet/BankBottomSheet';
import LoginBottomSheet from '@components/molecules/bottomSheet/LoginBottomSheet';
import PostWithdrawalScreen from '@components/templates/Withdrawal/PostWithdrawalScreen';
import PreWithdrawalScreen from '@components/templates/Withdrawal/PreWithdrawalScreen';
import ProgressWithdrawalScreen from '@components/templates/Withdrawal/ProgressWithdrawalScreen';
import Home from '@pages/Home';
import ImageUpload from '@pages/ImageUpload';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import { useModalStore } from '@stores/layerStore';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Routing = () => {
	const { Modal } = useModalStore();

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/my-page" element={<MyPage />} />
				<Route path="/point" element={<Point />} />
				<Route path="/image-upload" element={<ImageUpload />} />
				<Route path="/pre-withdrawal" element={<PreWithdrawalScreen />} />
				<Route
					path="/progress-withdrawal"
					element={<ProgressWithdrawalScreen />}
				/>
				<Route path="/post-withdrawal" element={<PostWithdrawalScreen />} />
			</Routes>
			<LoginBottomSheet />
			<AccountBottomSheet />
			<BankBottomSheet />
			{Modal}
		</BrowserRouter>
	);
};

export default Routing;
