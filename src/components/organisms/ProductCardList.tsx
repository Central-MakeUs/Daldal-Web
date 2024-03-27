import { ProductCard } from '@components/molecules';
import { ProductSimpleList } from '@models/product/entity/product';

const classNameOfGridCols = {
	2: 'grid-cols-2',
	3: 'grid-cols-3',
};

type GridCols = keyof typeof classNameOfGridCols;

type ProductCardListProps = {
	gridCols?: GridCols;
	size?: 'small' | 'medium' | 'large';
	type?: 'heart' | 'checkbox' | 'default';
	productList: ProductSimpleList;
};

const ProductCardList = ({
	gridCols = 2,
	size = 'medium',
	type = 'default',
	productList,
}: ProductCardListProps) => {
	return (
		<div className={`grid gap-4 ${classNameOfGridCols[gridCols]}`}>
			{productList.map(({ thumbnailUrl, id, ...product }) => (
				<ProductCard
					thumbnailUrl={thumbnailUrl}
					size={size}
					type={type}
					key={`ProductCard#${id}`}
					id={id}
					{...product}
				/>
			))}
		</div>
	);
};

export default ProductCardList;
