import { useEffect, useState } from 'react';

import notificationImg from '@assets/images/notification.png';
import { ProgressBar } from '@components/index';
import ClearLayout from '@layouts/ClearLayout';
import { useProductStore } from '@stores/productStore';

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

	const redirectUrl = useProductStore(state => state.redirectUrl);

	useEffect(() => {
		if (!state.isAnimating) {
			window.location.replace(redirectUrl);
		}
	}, [state]);

	const descriptions = [
		{ message: '결제 완료 후, 달달쇼핑에서', style: 'text-Gray60' },
		{ message: '캡쳐본을 통한 구매인증으로', style: 'text-Primary' },
		{ message: '환급액을 받아가세요!', style: 'text-Gray60' },
	];

	const subDescription =
		'* 캡처본은 제품명과 결제 시간이 포함되어야합니다.\n* 기재 된 링크를 통해 발생한 수익의 일부를 받을 수 있습니다.';

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
			<h4 className="typography-Body4 typography-M text-Error mt-2 whitespace-pre-line">
				{subDescription}
			</h4>
			<div className="flex-grow h-full flex items-center justify-center">
				<img src={notificationImg} width={314} height={398} />
			</div>
		</ClearLayout>
	);
};

export default Notification;
