import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./slices/lessons";

export const store = configureStore({
	reducer: {
		lessons: lessonReducer,
	},
});