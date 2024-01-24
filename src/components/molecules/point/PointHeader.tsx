import {
	GroupOrderTextPoint,
	RequestVerificationButton,
} from '@components/atoms';

const PointHeader = () => {
	const totalPoint = '10000';
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
