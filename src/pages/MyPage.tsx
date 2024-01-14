import { useEffect, useState } from 'react';

import CategoryButton from '@components/atoms/MyPage/CategoryButton';
import PageLayout from '@components/templates/PageLayout';

function MyPage() {
	const [userName, setUserName] = useState('홍길동');
	useEffect(() => {
		const userName = localStorage.getItem('userName');
		if (userName) {
			setUserName(userName);
		}
	}, []);

	return (
		<PageLayout leftType="logo">
			<div className="text-white typography-Body2 typography-R flex flex-col gap-2 mb-6">
				<div className="flex gap-2 items-baseline">
					<span className="text-Secondary-B typography-Headline">
						{userName}
					</span>
					회원님
				</div>
				카카오톡으로 로그인되셨습니다.
			</div>
			<div className="flex flex-col gap-[15px]">
				<CategoryButton iconId="like-full" title="찜한 목록" />
				<CategoryButton iconId="point-paid" title="포인트" />
				<CategoryButton iconId="mypage-person" title="포인트 환급 계좌정보" />
				<div className="flex gap-[15px]">
					<CategoryButton title="로그아웃" />
					<CategoryButton title="회원 탈퇴" />
				</div>
			</div>
		</PageLayout>
	);
}

export default MyPage;
