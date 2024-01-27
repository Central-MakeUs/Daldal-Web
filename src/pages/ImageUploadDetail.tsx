import { ReactNode } from 'react';

import { ApprovedTag, NotApprovedTag, ProgressTag } from '@components/atoms';
import { SmallProductDetailImageSlider } from '@components/molecules';
import PageLayout from '@layouts/PageLayout';
import { mockImages } from '@mocks/images';
import { Status } from '@type/status';
import { getDataInYYYYMMDDSplitedByDot, getPointText } from '@utils/formatData';

type StatusValueType = {
	[K in Status]: ReactNode;
};

const ImageUploadDetail = () => {
	//Todo: api 응답 정보로 교체
	const date = '2023-12-12T12:12:12:32';
	const status: Status = 'APPROVED';
	const point = '2000';
	const approvedMessage = '어떠어떠어떠한 이유로 승인되지 않았습니다.';

	const statusValue: StatusValueType = {
		APPROVED: <ApprovedTag size="large" />,
		NOT_APPROVED: <NotApprovedTag size="large" />,
		PROGRESS: <ProgressTag size="large" />,
	};

	const renderTextValue = (text: string, typography: string) => (
		<h2 className={`${typography} text-White`}>{text}</h2>
	);

	const renderContents = (
		title: string,
		value: ReactNode,
		row: boolean = true,
	) => {
		const contentsStyle = row
			? 'flex justify-between items-center'
			: 'flex flex-col gap-[13px]';

		return (
			<div className={`w-full ${contentsStyle}`}>
				<h3 className="typography-Body2 typography-R text-Gray20">{title}</h3>
				{value}
			</div>
		);
	};

	const renderExtraContents = () => {
		if (status === 'APPROVED') {
			return renderContents(
				'승인 금액',
				renderTextValue(getPointText(point), 'typography-Subhead'),
			);
		} else if (status === 'NOT_APPROVED') {
			return renderContents(
				'미승인 사유',
				renderTextValue(approvedMessage, 'typography-Body2 typography-R'),
				false,
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
					renderTextValue(
						getDataInYYYYMMDDSplitedByDot(date),
						'typography-Subhead',
					),
				)}
				{renderContents('승인 여부', statusValue[status])}
				{renderExtraContents()}
			</div>
		</PageLayout>
	);
};

export default ImageUploadDetail;
