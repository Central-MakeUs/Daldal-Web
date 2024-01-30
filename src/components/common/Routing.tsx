import {
	LoginBottomSheet,
	AccountBottomSheet,
	BankBottomSheet,
	ImageUploadBottomSheet,
} from '@components/molecules';
import {
	PreWithdrawal,
	ProgressWithdrawal,
	ProgressRegisterAccount,
	ProgressEditAccount,
	PostWithdrawal,
} from '@components/templates';
import {
	Category,
	EnterAccountInfo,
	Home,
	ImageUpload,
	ImageUploadDetail,
	MyPage,
	Point,
	ProductDetail,
	ReadAccountInfo,
	SaveAccountInfo,
	Search,
	Withdrawal,
	SignUp,
	Welcome,
	Notification,
	NotFound,
} from '@pages/index';
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
				<Route path="/image-upload/:imageId" element={<ImageUploadDetail />} />
				<Route path="/withdrawal/*" element={<Withdrawal />}>
					<Route path="pre" element={<PreWithdrawal />} />
					<Route path="progress" element={<ProgressWithdrawal />} />
					<Route path="post" element={<PostWithdrawal />} />
				</Route>
				<Route path="/category" element={<Category />} />
				<Route path="/category/:categoryName" element={<Category />} />
				<Route path="/pre-account" element={<ReadAccountInfo />} />
				<Route path="/progress-account/*" element={<EnterAccountInfo />}>
					<Route path="register" element={<ProgressRegisterAccount />} />
					<Route path="edit" element={<ProgressEditAccount />} />
				</Route>
				<Route path="/post-account" element={<SaveAccountInfo />} />
				<Route path="/detail/:productId" element={<ProductDetail />} />
				<Route path="/search" element={<Search />} />
				<Route path="/sign-up" element={<SignUp />} />
				<Route path="/welcome" element={<Welcome />} />
				<Route path="/notification" element={<Notification />} />

				<Route path="/*" element={<NotFound />} />
			</Routes>
			<LoginBottomSheet />
			<AccountBottomSheet />
			<BankBottomSheet />
			<ImageUploadBottomSheet />
			{Modal}
		</BrowserRouter>
	);
};

export default Routing;
