import { ReactNode } from 'react';

import ImageSlider from '@components/atoms/ImageSlider';
import ApprovedTag from '@components/atoms/tag/ApprovedTag';
import NotApprovedTag from '@components/atoms/tag/NotApprovedTag';
import ProgressTag from '@components/atoms/tag/ProgressTag';
import PageLayout from '@layouts/PageLayout';
import { mockImages } from '@mocks/images';
import { Status } from '@type/status';
import { getDataInYYYYMMDDSplitedByDot } from '@utils/formatData';

type StatusValueType = {
	[K in Status]: ReactNode;
};

const statusValue: StatusValueType = {
	APPROVED: <ApprovedTag size="large" />,
	NOT_APPROVED: <NotApprovedTag size="large" />,
	PROGRESS: <ProgressTag size="large" />,
};

const ImageUploadDetail = () => {
	const date = '2023-12-12T12:12:12:32';
	const status = 'PROGRESS';

	const dateValue = () => (
		<h2 className="typography-Subhead text-White">
			{getDataInYYYYMMDDSplitedByDot(date)}
		</h2>
	);

	const renderContents = (title: string, value: ReactNode) => (
		<div className="w-full flex justify-between items-center">
			<h3 className="typography-Body2 typography-R text-Gray20">{title}</h3>
			{value}
		</div>
	);

	return (
		<PageLayout leftType="back">
			<ImageSlider
				totalImageNumber={mockImages.length}
				className="w-screen max-w-[600px]"
			>
				{mockImages.map((image, idx) => (
					<div key={`Image#${idx}`}>
						<div style={{ position: 'relative' }}>
							<img
								src={image}
								alt="detail small image"
								className="w-full h-[350px]"
							/>
						</div>
					</div>
				))}
			</ImageSlider>
			<div className="p-6 flex flex-col gap-6">
				{renderContents('업로드 일시', dateValue())}
				{renderContents('승인 여부', statusValue[status])}
			</div>
		</PageLayout>
	);
};

export default ImageUploadDetail;
