import { DefaultWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { ProductSimpleListResponseDTO } from '@models/product/response/productSimpleListResponseDTO';
import { InfiniteData } from '@tanstack/react-query';
import { ApiResponse } from '@type/apiResponse';

type DefaultWishListProps = {
	productList:
		| InfiniteData<ApiResponse<ProductSimpleListResponseDTO>, unknown>
		| undefined;
	totalNumber: number;
};

const DefaultWishList = ({
	productList,
	totalNumber,
}: DefaultWishListProps) => {
	return (
		<>
			<DefaultWishListHeader />
			<div className="my-3">
				<h4 className="typography-Body4 typography-R text-White px-4 py-2">
					<span className="text-Primary typography-M">{totalNumber}</span> 개
				</h4>
				{productList?.pages.map((page, index) => (
					<ProductCardList
						key={`DefaultWishList#${index}`}
						productList={page.data.itemResponses}
					/>
				))}
			</div>
		</>
	);
};

export default DefaultWishList;
