import SvgIcon from '@components/common/SvgIcon';
import colors from '@constants/colors';

const RequestVerificationButton = () => {
	const handleClickRequestVerificationCaptionButton = () => {
		console.log('인증 요청 버튼 클릭');
	};

	return (
		<div
			className="flex gap-[2px] items-center bg-Gray80 w-fit h-fit px-1 rounded-[6px] cursor-pointer"
			onClick={handleClickRequestVerificationCaptionButton}
		>
			<SvgIcon id="photo" size={24} color={colors.White} />
			<span className="typography-Caption1 text-White">인증 요청</span>
		</div>
	);
};

export default RequestVerificationButton;
