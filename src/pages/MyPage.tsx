import PageLayout from '@layouts/PageLayout';
import { useEffect, useState } from 'react';

import CategoryButton from '@components/atoms/myPage/CategoryButton';
import { IconId } from '@type/svgIcon';

const MyPage = () => {
	const [userName, setUserName] = useState('홍길동');
	useEffect(() => {
		const userName = localStorage.getItem('userName');
		if (userName) {
			setUserName(userName);
		}
	}, []);

	const category: {
		iconId?: IconId;
		title: string;
	}[] = [
		{
			iconId: 'like-full',
			title: '찜한 목록',
		},
		{
			iconId: 'point-paid',
			title: '포인트',
		},
		{
			iconId: 'mypage-person',
			title: '포인트 환급 계좌정보',
		},
		{
			iconId: 'photo',
			title: '구매 인증',
		},
	];

	return (
		<PageLayout leftType="logo" className="p-6">
			<div className="text-white typography-Body2 typography-R flex flex-col gap-2 mb-6">
				<div className="flex gap-2 items-baseline">
					<span className="text-Secondary_B typography-Headline">
						{userName}
					</span>
					회원님
				</div>
				카카오톡으로 로그인되셨습니다.
			</div>
			<div className="flex flex-col gap-[15px]">
				{category.map((item, index) => (
					<CategoryButton
						key={`CategoryButton#${index}`}
						iconId={item.iconId}
						title={item.title}
					/>
				))}
				<div className="flex gap-[15px]">
					<CategoryButton title="로그아웃" />
					<CategoryButton title="회원 탈퇴" />
				</div>
			</div>
		</PageLayout>
	);
};

export default MyPage;
