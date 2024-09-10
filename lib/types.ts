export type Reply<T> = {
	success: boolean;
	message: string;
	data?: T;
};
