import { Button } from 'konsta/react';

import SvgIcon from '@components/common/SvgIcon';
import { IconId } from '@type/svgIcon';

type BankButtonProps = {
	iconId: IconId;
	title: string;
};

const BankButton = ({ iconId, title }: BankButtonProps) => {
	return (
		<Button className="h-[72px] flex flex-col gap-1 justify-center bg-transparent active:bg-transparent">
			<SvgIcon id={iconId} size={40} />
			<h3 className="typography-Body4 typography-M text-Black">{title}</h3>
		</Button>
	);
};

export default BankButton;
