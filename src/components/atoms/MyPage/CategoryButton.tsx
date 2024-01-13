import { Button } from 'konsta/react';

import SvgIcon from '@components/common/SvgIcon';
import colors from '@constants/colors';
import { IconId } from '@type/svgIcon';

interface CategoryButtonProps {
	iconId?: IconId;
	title: string;
	onClick?: () => void;
}

function CategoryButton({ iconId, title, onClick }: CategoryButtonProps) {
	return (
		<Button
			onClick={onClick}
			className={`px-4 py-[15px] k-color-Gray80 text-White rounded-xl !typography-Body1 !typography-R box-content ${
				iconId ? '!justify-start' : '!justify-center'
			} items-center w-full gap-2`}
		>
			{iconId && <SvgIcon id={iconId} color={colors.White} size={24} />}
			{title}
		</Button>
	);
}

export default CategoryButton;
