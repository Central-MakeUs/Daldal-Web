import { getAccountInfo, patchAccountInfo } from '@apis/account';
import { AccountInfoRequestDTO } from '@models/account/request/accountInfoRequestDTO';
import { useMutation, useQuery } from '@tanstack/react-query';
import { getAccessToken } from '@utils/localStorage/token';

export const useGetAccountInfo = () => {
	const accessToken = getAccessToken();

	if (!accessToken) {
		return {
			data: {
				account: '',
				accountBank: '',
				depositorName: '',
			},
			isError: true,
		};
	}

	// eslint-disable-next-line react-hooks/rules-of-hooks
	return useQuery({
		queryKey: ['accountInfo'],
		queryFn: () => getAccountInfo(),
		select: data => data.data,
	});
};

export const usePatchAccountIfo = (
	successCallback?: () => void,
	errorCallback?: (error: Error) => void,
) => {
	return useMutation({
		mutationFn: (data: AccountInfoRequestDTO) => patchAccountInfo(data),
		onSuccess: successCallback,
		onError: errorCallback,
	});
};
