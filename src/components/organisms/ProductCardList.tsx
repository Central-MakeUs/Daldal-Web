import ProductCard from '@components/molecules/ProductCard';
import { mockProductList } from '@mocks/productList';

type ProductCardListProps = {
	gridCols?: number;
	size?: 'small' | 'medium' | 'large';
	type?: 'heart' | 'checkbox' | 'default';
	productList?: typeof mockProductList;
};

const ProductCardList = ({
	gridCols,
	size = 'medium',
	type = 'default',
	productList = mockProductList,
}: ProductCardListProps) => {
	const classNameOfGridCols = gridCols
		? `grid-cols-${gridCols}`
		: 'grid-cols-2';

	return (
		<div className={`grid gap-4 ${classNameOfGridCols}`}>
			{productList.map(product => {
				return (
					<ProductCard
						thumbnail={product.image}
						size={size}
						type={type}
						key={product.id}
						{...product}
					/>
				);
			})}
		</div>
	);
};

export default ProductCardList;
