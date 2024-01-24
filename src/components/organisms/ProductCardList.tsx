import { ProductCard } from '@components/molecules';
import { mockProductList } from '@mocks/productList';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();
	const handleCardClick = (id: number) => {
		navigate(`/detail/${id}`);
	};

	return (
		<div className={`grid gap-4 ${classNameOfGridCols[gridCols]}`}>
			{productList.map(({ image, id, ...product }, index) => (
				<ProductCard
					thumbnail={image}
					size={size}
					type={type}
					key={`ProductCard#${index}`}
					handleClick={() => handleCardClick(id)}
					{...product}
				/>
			))}
		</div>
	);
};

export default ProductCardList;
