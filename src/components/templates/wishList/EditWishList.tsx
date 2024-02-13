import { DefaultButton } from '@components/index';
import { EditWishListHeader } from '@components/molecules';
import { ProductCardList } from '@components/organisms';
import { useDeleteWishItem } from '@hooks/apis/wishList';
import FixedBottomLayout from '@layouts/FixedBottomLayout';
import { ProductSimpleListResponseDTO } from '@models/product/response/productSimpleListResponseDTO';
import { useWishListEditStore, useWishListStore } from '@stores/wishListStore';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { ApiResponse } from '@type/apiResponse';

type EditWishListProps = {
	productList:
		| InfiniteData<ApiResponse<ProductSimpleListResponseDTO>, unknown>
		| undefined;
};

const EditWishList = ({ productList }: EditWishListProps) => {
	const checkedItems = useWishListEditStore(state => state.checkedItems);
	const setWishListStatus = useWishListStore(state => state.setWishListStatus);

	const queryClient = useQueryClient();
	const onSuccessCallback = () => {
		queryClient.invalidateQueries({
			queryKey: ['wishListProductSimpleList'],
		});
		setWishListStatus('default');
	};
	const { mutate: deleteWishList } = useDeleteWishItem(onSuccessCallback);

	const handleDeleteItems = () => {
		deleteWishList(checkedItems);
	};

	return (
		<>
			<EditWishListHeader />
			<div className="my-3">
				{productList?.pages.map((page, index) => (
					<ProductCardList
						key={`EditWishList#${index}`}
						productList={page.data.itemResponses}
						type="checkbox"
					/>
				))}
			</div>
			{checkedItems.length > 0 && (
				<FixedBottomLayout childrenPadding="px-6" height="h-15">
					<DefaultButton
						title="삭제하기"
						color={{
							textColor: 'Black',
							bgColor: 'White',
						}}
						size="large"
						onClick={handleDeleteItems}
					/>
				</FixedBottomLayout>
			)}
		</>
	);
};

export default EditWishList;
