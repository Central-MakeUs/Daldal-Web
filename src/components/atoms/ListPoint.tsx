import SvgIcon from '@assets/icons/SvgIcon';
import colors from '@constants/colors';
import { Block } from 'konsta/react';

function ListPoint() {
	return (
		<Block
			strong
			inset
			className="k-color-Gray90 bg-Gray90 flex items-center rounded-[13px] !p-4"
		>
			<Block className="flex items-center flex-1 gap-[10px] !m-0 !p-0">
				<SvgIcon id="point-paid" color={colors.Gray20} size={24} />
				<Block className="flex flex-col !m-0 !p-0">
					<span className="typography-Caption1 typography-SB text-Gray50">
						2023.12.23
					</span>
					<span className="typography-Body2 typography-R text-Gray10">
						200P
					</span>
				</Block>
			</Block>
			<SvgIcon id="direction-right" color={colors.Gray20} size={24} />
		</Block>
	);
}

export default ListPoint;
