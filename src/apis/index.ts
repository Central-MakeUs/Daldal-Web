import axios, { AxiosError } from 'axios';

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

api.interceptors.request.use(
	async config => {
		const accessToken = getAccessToken();

		if (accessToken) {
			config.headers.Authorization = accessToken;
		}

		return config;
	},
	(error: AxiosError) => {
		console.log('interceptor > error', error);
		Promise.reject(error);
	},
);
