import { DefaultButton, SvgIcon } from '@components/index';
import { DefaultWishListHeader } from '@components/molecules';
import { useNavigate } from 'react-router-dom';

const DefaultWishListWithNoItem = () => {
	const message = '찜한 상품이 없습니다!\n상품을 둘러보시겠어요?';

	const navigate = useNavigate();

	const handleNavigateToHome = () => {
		navigate('/');
	};

	return (
		<div className="h-full flex flex-col">
			<DefaultWishListHeader />
			<div className="h-[calc(100vh-185px)] flex flex-col items-center justify-center gap-4">
				<SvgIcon id="no-wish-list" size={163} />
				<div className="text-center typography-Body2 typography-R text-White whitespace-pre-line">
					{message}
				</div>
				<DefaultButton
					title="상품 둘러보기"
					color={{
						textColor: 'Black',
						bgColor: 'White',
					}}
					size="large"
					className="w-1/3"
					onClick={handleNavigateToHome}
				/>
			</div>
		</div>
	);
};

export default DefaultWishListWithNoItem;
