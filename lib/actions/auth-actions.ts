import { Reply } from "../types";

export const signUp = (email: string, password: string): Reply<void> => {
	return { success: true, message: "User signed up" } as Reply<void>;
};
