import {
	GroupOrderTextPoint,
	RequestVerificationButton,
} from '@components/atoms';
import { Point } from '@models/point/entity/point';

const PointHeader = () => {
	// TODO: totalPoint API 연동
	const totalPoint: Point = '10000';

	return (
		<div className="flex justify-between items-end mb-7">
			<div className="typography-Body1 typography-R text-White">
				회원님의 현재 포인트는 <br />
				<GroupOrderTextPoint point={totalPoint} /> 입니다.
			</div>
			<RequestVerificationButton />
		</div>
	);
};

export default PointHeader;
