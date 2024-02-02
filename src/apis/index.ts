import axios, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

import { getAccessToken } from '@utils/token';

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
	if (error.response?.status === 401) {
		// TODO: refresh token 으로 access token 받아오기
	}
};

api.interceptors.request.use(onRequestFulfilled, onRequestRejected);
api.interceptors.response.use(onResponseFulfilled, onResponseRejected);
