export type ApiResponse<T = object> = {
	errorCode: string;
	message: string;
	status: 'noContent' | 'ok' | 'created';
	data: T;
};
