import { Button } from 'konsta/react';

import { SvgIcon } from '@components/common';
import colors from '@constants/colors';
import { IconId } from '@type/svgIcon';

type CategoryButtonProps = {
	iconId?: IconId;
	title: string;
	textCenter?: boolean;
	onClick?: () => void;
};

const CategoryButton = ({
	iconId,
	title,
	textCenter = false,
	onClick,
}: CategoryButtonProps) => {
	return (
		<Button
			onClick={onClick}
			className={`px-4 py-[15px] k-color-Gray80 text-White rounded-xl !typography-Body1 !typography-R h-[62px] ${
				textCenter ? '!justify-center' : '!justify-start'
			} items-center w-full gap-2`}
		>
			{iconId && <SvgIcon id={iconId} color={colors.White} size={32} />}
			{title}
		</Button>
	);
};

export default CategoryButton;
