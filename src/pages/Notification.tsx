import { useEffect, useState } from 'react';

import { ProgressBar, SvgIcon } from '@components/index';
import ClearLayout from '@layouts/ClearLayout';

const Notification = () => {
	const [state, setState] = useState({
		isAnimating: true,
		key: 0,
	});

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setState(prevState => ({
				...prevState,
				isAnimating: false,
			}));
		}, 2500);

		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		if (!state.isAnimating) {
			//TODO: 서버로 부터 받은 url 정보로 변경
			window.location.href = 'https://zigzag.kr/';
		}
	}, [state]);

	const descriptions = [
		{ message: '결제 완료 후, 달달쇼핑에서', style: 'text-Gray60' },
		{ message: '캡쳐본을 통한 구매인증으로', style: 'text-Primary' },
		{ message: '환급액을 받아가세요!', style: 'text-Gray60' },
	];
	return (
		<ClearLayout className="flex flex-col relative bg-White py-[31px]">
			<ProgressBar isAnimating={state.isAnimating} key={state.key} />
			<h2 className="text-Black typography-Subhead">
				지그재그로 이동중입니다!
			</h2>
			{descriptions.map(desc => (
				<h3 className={`typography-Body1 typography-M ${desc.style}`}>
					{desc.message}
				</h3>
			))}
			<h4 className="typography-Body4 typography-M text-Error mt-3">
				* 캡처본은 제품명과 결제 시간이 포함되어야합니다.
			</h4>
			<div className="flex-grow h-full flex items-center justify-center">
				<SvgIcon id="progress" width={339} height={415} />
			</div>
		</ClearLayout>
	);
};

export default Notification;
