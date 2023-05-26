import { configureStore } from "@reduxjs/toolkit";
import lessonReducer from "./slices/lessons";
import aboutUsReducer from "./slices/about-us";

export const store = configureStore({
	reducer: {
		lessons: lessonReducer,
		aboutus: aboutUsReducer,
	},
});