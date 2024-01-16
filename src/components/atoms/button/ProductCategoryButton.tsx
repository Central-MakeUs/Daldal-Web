import SvgIcon from '@components/common/SvgIcon';
import colors from '@constants/colors';
import { IconId } from '@type/svgIcon';

type ProductCategoryButtonProps = {
	iconId: IconId;
	category: string;
	handleCategoryButtonClick?: () => void;
};

const ProductCategoryButton = ({
	iconId,
	category,
	handleCategoryButtonClick,
}: ProductCategoryButtonProps) => {
	return (
		<div
			className="flex flex-col gap-1 items-center"
			onClick={handleCategoryButtonClick}
		>
			<SvgIcon id={iconId} size={40} color={colors.White} />
			<span className="typography-Body4 typography-R text-white">
				{category}
			</span>
		</div>
	);
};

export default ProductCategoryButton;
