"use server";

import { Reply } from "../types";

export const getVideos = async () => {
	return {
		success: true,
		message: "Videos retrieved",
		data: ["https://www.youtube.com/embed/LTULj_ZCnMs"],
	} as Reply<string[]>;
};
