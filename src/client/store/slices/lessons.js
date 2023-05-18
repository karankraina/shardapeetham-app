import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchLessons = createAsyncThunk(
	"lessons/fetch",
	() => {
		return fetch("/api/lessons").then(res => res.json());
	}
);

const initialState = {
	lessons: [],
	isLoading: false,
	error: null
};

export const lessonSlice = createSlice({
	name: "lessons",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchLessons.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchLessons.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.lessons = action.payload;
		},
		[fetchLessons.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error;
			state.lessons = [];
		},
	},
});

// Action creators are generated for each case reducer function
// export const {  } = lessonSlice.actions;

export default lessonSlice.reducer;