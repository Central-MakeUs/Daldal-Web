import AccountBottomSheet from '@components/molecules/bottomSheet/AccountBottomSheet';
import BankBottomSheet from '@components/molecules/bottomSheet/BankBottomSheet';
import LoginBottomSheet from '@components/molecules/bottomSheet/LoginBottomSheet';
import PostWithdrawalScreen from '@components/templates/Withdrawal/PostWithdrawalScreen';
import PreWithdrawalScreen from '@components/templates/Withdrawal/PreWithdrawalScreen';
import ProgressWithdrawalScreen from '@components/templates/Withdrawal/ProgressWithdrawalScreen';
import Category from '@pages/Category';
import Home from '@pages/Home';
import ImageUpload from '@pages/ImageUpload';
import MyPage from '@pages/MyPage';
import Point from '@pages/Point';
import ProductDetail from '@pages/ProductDetail';
import Withdrawal from '@pages/Withdrawal';
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
				<Route path="/withdrawal/*" element={<Withdrawal />}>
					<Route path="pre" element={<PreWithdrawalScreen />} />
					<Route path="progress" element={<ProgressWithdrawalScreen />} />
					<Route path="post" element={<PostWithdrawalScreen />} />
				</Route>
				<Route path="/category" element={<Category />} />
				<Route path="/category/:categoryName" element={<Category />} />
				<Route path="/detail/:productId" element={<ProductDetail />} />
			</Routes>
			<LoginBottomSheet />
			<AccountBottomSheet />
			<BankBottomSheet />
			{Modal}
		</BrowserRouter>
	);
};

export default Routing;
