import { useEffect, useState } from 'react';

import { CategoryButton } from '@components/atoms';
import { useLogout } from '@hooks/apis/auth';
import PageLayout from '@layouts/PageLayout';
import { useModalStore } from '@stores/layerStore';
import { IconId } from '@type/svgIcon';
import { getRefreshToken } from '@utils/localStorage/token';
import { getProvider, getUserName } from '@utils/localStorage/userInfo';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
	//const { data } = useGetUserInfo();

	const [userName, setUserName] = useState('홍길동');
	const [provider, setProvider] = useState('카카오톡');
	useEffect(() => {
		const userName = getUserName();
		const provider = getProvider();
		if (userName) {
			setUserName(userName);
		}
		if (provider) {
			setProvider(provider);
		}
	}, []);

	const navigate = useNavigate();

	const category: {
		iconId?: IconId;
		title: string;
		route?: string;
		url?: string;
	}[] = [
		{
			iconId: 'like-full',
			title: '찜한 목록',
			route: '/wish-list',
		},
		{
			iconId: 'point-paid',
			title: '포인트',
			route: '/point',
		},
		{
			iconId: 'mypage-person',
			title: '포인트 환급 계좌정보',
			route: '/pre-account',
		},
		{
			iconId: 'photo',
			title: '구매 인증',
			route: '/image-upload',
		},
		{
			title: '서비스 이용 약관',
			url: 'https://yummy-cornucopia-57e.notion.site/678652b0d7b340a0abe72f683c767957?pvs=4',
		},
		{
			title: '개인정보 처리 방침',
			url: 'https://yummy-cornucopia-57e.notion.site/ba20c5e28f2c49fba01a7215b937c580?pvs=4',
		},
	];

	const { openModal } = useModalStore();
	const handleCancelEnrollmentModal = () => {
		openModal('cancellation');
	};

	const navigateToSignUpPage = () => {
		navigate('/sign-up');
	};
	const { mutate } = useLogout(navigateToSignUpPage);
	const handleClickLogout = () => {
		const refreshToken = getRefreshToken();
		if (refreshToken) {
			const requestData = {
				refreshToken,
			};
			mutate(requestData);
		} else {
			navigateToSignUpPage();
		}
	};

	return (
		<PageLayout leftType="home" className="px-6 py-3">
			<div className="text-white typography-Body2 typography-R flex flex-col gap-2 mb-6">
				<div className="flex gap-2 items-baseline">
					<span className="text-Secondary_B typography-Headline">
						{userName}
					</span>
					회원님
				</div>
				{provider}으로 로그인되셨습니다.
			</div>
			<div className="flex flex-col gap-[15px]">
				{category.map((item, index) => (
					<CategoryButton
						key={`CategoryButton#${index}`}
						iconId={item.iconId}
						title={item.title}
						onClick={() => {
							if (item.route) {
								navigate(item.route);
							} else if (item.url) {
								window.location.href = item.url;
							}
						}}
					/>
				))}
				<div className="flex gap-[15px]">
					<CategoryButton
						title="로그아웃"
						textCenter={true}
						onClick={handleClickLogout}
					/>
					<CategoryButton
						title="회원 탈퇴"
						textCenter={true}
						onClick={handleCancelEnrollmentModal}
					/>
				</div>
			</div>
		</PageLayout>
	);
};

export default MyPage;
