import ProductCard from '@components/molecules/ProductCard';
import { mockProductList } from '@mocks/productList';

const classNameOfGridCols = {
	2: 'grid-cols-2',
	3: 'grid-cols-3',
};

type GridCols = keyof typeof classNameOfGridCols;

type ProductCardListProps = {
	gridCols?: GridCols;
	size?: 'small' | 'medium' | 'large';
	type?: 'heart' | 'checkbox' | 'default';
	productList?: typeof mockProductList;
};

const ProductCardList = ({
	gridCols = 2,
	size = 'medium',
	type = 'default',
	productList = mockProductList,
}: ProductCardListProps) => {
	return (
		<div className={`grid gap-4 ${classNameOfGridCols[gridCols]}`}>
			{productList.map((product, id) => {
				return (
					<ProductCard
						thumbnail={product.image}
						size={size}
						type={type}
						key={`ProductCard#${id}`}
						{...product}
					/>
				);
			})}
		</div>
	);
};

export default ProductCardList;
