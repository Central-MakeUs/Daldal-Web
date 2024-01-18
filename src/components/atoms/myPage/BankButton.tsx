import { Button } from 'konsta/react';

import SvgIcon from '@components/common/SvgIcon';
import { IconId } from '@type/svgIcon';

type BankButtonProps = {
	iconId: IconId;
	title: string;
	onClick: () => void;
};

const BankButton = ({ iconId, title, onClick }: BankButtonProps) => {
	return (
		<Button
			className="h-[72px] flex flex-col gap-1 justify-center k-color-White !pt-[7px] !pb-[6px] ounded-[11px] border border-solid border-Gray10"
			onClick={onClick}
		>
			<SvgIcon id={iconId} size={40} />
			<h3 className="typography-Body4 typography-M text-Black">{title}</h3>
		</Button>
	);
};

export default BankButton;
