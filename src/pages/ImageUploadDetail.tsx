import { ReactNode } from 'react';

import {
	ApprovedTag,
	KeyValueContainer,
	NotApprovedTag,
	ProgressTag,
} from '@components/atoms';
import {
	DefaultKeyValueContainer,
	SmallProductDetailImageSlider,
} from '@components/molecules';
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

	const renderExtraContents = () => {
		if (status === 'APPROVED') {
			return (
				<DefaultKeyValueContainer
					title="승인 금액"
					value={getPointText(point)}
				/>
			);
		} else if (status === 'NOT_APPROVED') {
			const textValue = renderTextValue(
				approvedMessage,
				'typography-Body2 typography-R',
			);

			return (
				<KeyValueContainer title="미승인 사유" value={textValue} row={false} />
			);
		} else {
			return null;
		}
	};

	return (
		<PageLayout leftType="back">
			<SmallProductDetailImageSlider images={mockImages} />
			<div className="p-6 flex flex-col gap-6">
				<DefaultKeyValueContainer
					title="업로드 일시"
					value={getDataInYYYYMMDDSplitedByDot(date)}
				/>
				<KeyValueContainer title="승인 여부" value={statusValue[status]} />
				{renderExtraContents()}
			</div>
		</PageLayout>
	);
};

export default ImageUploadDetail;
