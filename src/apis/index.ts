import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

import { ApiResponse } from '@type/apiResponse';
import {
	getAccessToken,
	getRefreshToken,
	renewAccessToken,
	setAccessToken,
	setRefreshToken,
	verifyAccessToken,
} from '@utils/localStorage/token';

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10 * 1000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
});

const onRequestFulfilled = async (config: InternalAxiosRequestConfig) => {
	let accessToken = getAccessToken();

	if (!verifyAccessToken()) {
		renewAccessToken();
		accessToken = getAccessToken();
	}

	if (accessToken && config.headers) {
		config.headers['Authorization'] = `Bearer ${accessToken}`;
	}

	return config;
};

const onRequestRejected = (error: AxiosError) => {
	console.log('interceptor > error', error);
	Promise.reject(error);
};

const onResponseFulfilled = (response: AxiosResponse) => response;

const onResponseRejected = async (error: AxiosError) => {
	const requestConfig = error.config;

	if (!requestConfig) return Promise.reject(error);

	if (error.response?.status === 401) {
		const errorCode = (error.response?.data as ApiResponse<null>)?.errorCode;
		if (errorCode === '401/0001') {
			renewAccessToken();
		} else if (errorCode === '401/0002') {
			const { data } = await api.post('/api/v1/auth/refresh-access-token', {
				refreshToken: getRefreshToken(),
			});

			const newAccessToken = data.accessToken;
			const newRefreshToken = data.refreshToken;

			setAccessToken(newAccessToken);
			setRefreshToken(newRefreshToken);

			requestConfig.headers['Authorization'] = `Bearer ${newAccessToken}`;

			return api(requestConfig);
		}
	}
};

api.interceptors.request.use(onRequestFulfilled, onRequestRejected);
api.interceptors.response.use(onResponseFulfilled, onResponseRejected);
