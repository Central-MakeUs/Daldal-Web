import { ReactNode } from 'react';

import {
	ApprovedTag,
	NotApprovedTag,
	ProgressTag,
	DefaultButton,
} from '@components/atoms';
import { SmallProductDetailImageSlider } from '@components/molecules';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import PageLayout from '@layouts/PageLayout';
import { mockImages } from '@mocks/images';
import { Status } from '@type/status';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';

type StatusValueType = {
	[K in Status]: ReactNode;
};

const statusValue: StatusValueType = {
	APPROVED: <ApprovedTag size="large" />,
	NOT_APPROVED: <NotApprovedTag size="large" />,
	PROGRESS: <ProgressTag size="large" />,
};

const ImageUploadDetail = () => {
	//Todo: api 응답 정보로 교체
	const date = '2023-12-12T12:12:12:32';
	const status: Status = 'APPROVED';
	const point = '2000';
	const approvedMessage = '어떠어떠어떠한 이유로 승인되지 않았습니다.';

	const handleClickReApprove = () => {
		//Todo: 승인 api 요청
		console.log('재 승인 요청하기');
	};

	const renderTextValue = (text: string) => (
		<h2 className="typography-Subhead text-White">{text}</h2>
	);

	const renderContents = (title: string, value: ReactNode) => {
		return (
			<div className="w-full flex justify-between items-center">
				<h3 className="typography-Body2 typography-R text-Gray20">{title}</h3>
				{value}
			</div>
		);
	};

	const renderExtraContents = () => {
		if (status === 'APPROVED') {
			return renderContents('승인 금액', renderTextValue(getPointText(point)));
		} else if (status === 'NOT_APPROVED') {
			return (
				<div className="flex flex-col gap-[13px]">
					<h3 className="typography-Body2 typography-R text-Gray20">
						미승인 사유
					</h3>
					<h3 className="typography-Body2 typography-R text-White">
						{approvedMessage}
					</h3>
					<FixedBottomLayout childrenPadding="px-6" height="h-15">
						<DefaultButton
							title="재승인 요청하기"
							color={{ bgColor: 'White', textColor: 'Black' }}
							size="large"
							onClick={handleClickReApprove}
						/>
					</FixedBottomLayout>
				</div>
			);
		} else {
			return null;
		}
	};

	return (
		<PageLayout leftType="back">
			<SmallProductDetailImageSlider images={mockImages} />
			<div className="p-6 flex flex-col gap-6">
				{renderContents(
					'업로드 일시',
					renderTextValue(getDataInYYYYMMDDSplitedByDot(date)),
				)}
				{renderContents('승인 여부', statusValue[status])}
				{renderExtraContents()}
			</div>
		</PageLayout>
	);
};

export default ImageUploadDetail;
