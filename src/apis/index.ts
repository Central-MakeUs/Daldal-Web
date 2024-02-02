import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

import {
	getAccessToken,
	getRefreshToken,
	setAccessToken,
	setRefreshToken,
} from '@utils/token';

export const noAuthApi = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10 * 1000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

export const api = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL,
	timeout: 10 * 1000,
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	},
	withCredentials: true,
});

const onRequestFulfilled = async (config: InternalAxiosRequestConfig) => {
	const accessToken = getAccessToken();

	if (accessToken && config.headers) {
		config.headers['Authorization'] = accessToken;
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
		const { data } = await api.post('/api/v1/auth/refresh-access-token', {
			refreshToken: getRefreshToken(),
		});

		const newAccessToken = data.accessToken;
		const newRefreshToken = data.refreshToken;

		setAccessToken(newAccessToken);
		setRefreshToken(newRefreshToken);

		requestConfig.headers['Authorization'] = newAccessToken;

		return api(requestConfig);
	}
};

api.interceptors.request.use(onRequestFulfilled, onRequestRejected);
api.interceptors.response.use(onResponseFulfilled, onResponseRejected);
