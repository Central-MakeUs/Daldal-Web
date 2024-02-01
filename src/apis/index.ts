import axios from 'axios';

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
