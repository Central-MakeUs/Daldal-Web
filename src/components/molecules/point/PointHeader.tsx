import { useEffect } from 'react';

import {
	GroupOrderTextPoint,
	RequestVerificationButton,
} from '@components/atoms';
import { useGetCurrentPoint } from '@hooks/apis/point';
import { setHeldPoint } from '@utils/localStorage/point';

const PointHeader = () => {
	const { data: totalPoint } = useGetCurrentPoint();
	useEffect(() => {
		if (typeof totalPoint === 'number') {
			setHeldPoint(totalPoint);
		}
	}, [totalPoint]);

	return (
		<div className="flex justify-between items-end mb-7">
			<div className="typography-Body1 typography-R text-White">
				회원님의 현재 포인트는 <br />
				<GroupOrderTextPoint point={String(totalPoint)} /> 입니다.
			</div>
			<RequestVerificationButton />
		</div>
	);
};

export default PointHeader;
