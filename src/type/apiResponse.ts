export type ApiResponse<T = object> = {
	code: number;
	message: string;
	timestamp: Date;
	data: T;
};
