import { useEffect, useRef } from 'react';

import { DefaultButton, SvgIcon } from '@components/index';
import ClearLayout from '@layouts/ClearLayout';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { useLocation, useNavigate } from 'react-router-dom';

type FallbackProps = {
	error: {
		message: string;
	};
	resetErrorBoundary: () => void;
};

const Error = ({ resetErrorBoundary }: FallbackProps) => {
	const navigate = useNavigate();
	const location = useLocation();
	const errorLocation = useRef(location.pathname);

	useEffect(() => {
		if (location.pathname !== errorLocation.current) {
			resetErrorBoundary();
		}
	}, [location.pathname]);

	const handleClickHome = () => {
		navigate('/');
		resetErrorBoundary();
	};

	const message = {
		title: '앗, 여기는 달달한 상품이 \n 없는 것 같아요 🥲',
		description: `죄송합니다. 오류가 발생했습니다.\n문제를 해결하기 위해 열심히 노력중입니다.\n잠시 후 다시 들어와주세요.`,
	};

	return (
		<ClearLayout className="px-[25px] py-[24px]">
			<div className="flex flex-col gap-3">
				<SvgIcon id="error" width={206} height={78} />
				<h2 className="typography-Subhead text-White whitespace-pre-line">
					{message.title}
				</h2>
				<h4 className="typography-Body2 typography-R text-Gray20 whitespace-pre-line">
					{message.description}
				</h4>
			</div>
			<FixedBottomLayout childrenPadding="px-6" height="h-15">
				<DefaultButton
					title="달달쇼핑 홈으로 가기"
					color={{ bgColor: 'White', textColor: 'Black' }}
					size="large"
					onClick={handleClickHome}
				/>
			</FixedBottomLayout>
		</ClearLayout>
	);
};

export default Error;
