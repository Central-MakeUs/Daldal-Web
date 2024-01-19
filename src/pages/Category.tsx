import SearchTextField from '@components/atoms/SearchTextField';
import SvgIcon from '@components/common/SvgIcon';
import ProductCardList from '@components/organisms/ProductCardList';
import categoryList from '@constants/categoryList';
import colors from '@constants/colors';
import PageLayout from '@layouts/PageLayout';
import { IconId } from '@type/svgIcon';
import { useRouteMatch } from 'react-router';

type CategoryParams = {
	id: 'clothes' | 'hat' | 'bags' | 'shoes' | 'jewlery';
};

const Category = () => {
	const match = useRouteMatch<CategoryParams>();

	const selected = match?.params.id === undefined ? 'clothes' : match.params.id;
	const iconId = categoryList[selected].id as IconId;
	const name = categoryList[selected].name;

	return (
		<PageLayout leftType="back" className="">
			<SearchTextField className="!mx-6 !my-4" />
			<div className="flex gap-1 mt-5 mb-3 mx-3">
				<SvgIcon id={iconId} size={32} color={colors.White} />
				<h2 className="text-White typography-Subhead">{name}</h2>
			</div>
			<div className="px-[14.5px] py-3">
				<ProductCardList type="heart" />
			</div>
		</PageLayout>
	);
};

export default Category;
