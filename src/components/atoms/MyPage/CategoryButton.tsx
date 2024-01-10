import { Button } from 'konsta/react';

import SvgIcon from '@assets/icons/SvgIcon';
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
			className={`px-4 py-[15px] bg-Gray80 k-color-Gray80 text-White rounded-xl !typography-Body1 !typography-R flex !justify-${
				iconId ? 'start' : 'center'
			} gap-2 box-content`}
		>
			{iconId && <SvgIcon id={iconId} color={colors.White} size={24} />}
			{title}
		</Button>
	);
}

export default CategoryButton;
