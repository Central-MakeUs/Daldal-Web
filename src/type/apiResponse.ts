export type ApiResponse<T = object> = {
	status: 'noContent' | 'ok' | 'created';
	data: T;
};
