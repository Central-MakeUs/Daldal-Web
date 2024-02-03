export type ApiResponse<T = object> = {
	code: number;
	message: string;
	data: {
		status: 'noContent' | 'ok' | 'created';
		data: T;
	};
};
