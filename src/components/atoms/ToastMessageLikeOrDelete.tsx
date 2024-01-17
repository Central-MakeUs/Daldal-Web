import { Button } from 'konsta/react';

import SvgIcon from '@components/common/SvgIcon';
import colors from '@constants/colors';

type ToastMessageLikeOrDeleteProps = {
	like: boolean;
};

const ToastMessageLikeOrDelete = ({ like }: ToastMessageLikeOrDeleteProps) => {
	const handleClick = () => {
		console.log('찜 목록 가기');
	};

	const toastPadding = like ? 'px-3 py-1.5' : 'px-1.5 py-4 text-center';

	return (
		<div className={`w-full rounded-xl bg-White ${toastPadding}`}>
			{like && (
				<div className="flex justify-between items-center">
					<div className="flex items-center gap-2.5">
						<SvgIcon id="custom-like" size={40} />
						<h5 className="typography-Body2 typography-R">
							찜한 상품에 추가했어요.
						</h5>
					</div>
					<Button
						className="!w-fit !inline-flex !items-center gap-1 !p-0 bg-transparent active:bg-transparent"
						onClick={handleClick}
					>
						<h6 className="!typography-Body4 !typography-R !text-Primary">
							찜 목록 가기
						</h6>
						<SvgIcon id="direction-right" color={colors.Primary} size={16} />
					</Button>
				</div>
			)}
			{!like && '찜한 상품에서 삭제했어요.'}
		</div>
	);
};

export default ToastMessageLikeOrDelete;
