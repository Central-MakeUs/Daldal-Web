import ProductCard from '@components/molecules/ProductCard';
import { mockProductList } from '@mocks/productList';

const ProductCardList = () => {
	return (
		<div className="grid grid-cols-2 gap-4">
			{mockProductList.map(product => {
				return (
					<ProductCard
						thumbnail={product.image}
						size="medium"
						type="heart"
						key={product.id}
						{...product}
					/>
				);
			})}
		</div>
	);
};

export default ProductCardList;
