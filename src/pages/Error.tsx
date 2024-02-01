import { DefaultButton, SvgIcon } from '@components/index';
import ClearLayout from '@layouts/ClearLayout';
import FixedBottomLayout from '@layouts/FixedBottomLayout';

type FallbackProps = {
	error: {
		message: string;
	};
	resetErrorBoundary: () => void;
};

const Error = ({ error, resetErrorBoundary }: FallbackProps) => {
	const handleClickHome = () => {
		resetErrorBoundary();
	};

	const message = {
		title: '앗, 여기는 달달한 상품이 \n 없는 것 같아요 🥲',
		description: `${error}\n\n죄송합니다. 오류가 발생했습니다.\n문제를 해결하기 위해 열심히 노력중입니다.\n잠시 후 다시 들어와주세요.`,
	};

	return (
		<ClearLayout className="px-[25px] py-[24px]">
			<div className="flex flex-col gap-3">
				<SvgIcon id="error" width={212} height={80} />
				<h2 className="typography-Subhead text-White whitespace-pre-line">
					{message.title}
				</h2>
				<h4 className="typography-Body2 typography-R text-Gray20 whitespace-pre-line">
					{message.description}
				</h4>
			</div>
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<DefaultButton
					title="다시 시도하기"
					color={{ bgColor: 'White', textColor: 'Black' }}
					size="large"
					onClick={handleClickHome}
				/>
			</FixedBottomLayout>
		</ClearLayout>
	);
};

export default Error;
