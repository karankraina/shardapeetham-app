import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchAboutUs = createAsyncThunk(
	"about-us/fetch",
	() => {
		return fetch("/api/about-us").then(res => res.text());
	}
);

const initialState = {
	markup: "",
	isLoading: false,
	error: null
};

export const aboutUsSlice = createSlice({
	name: "about-us",
	initialState,
	reducers: {},
	extraReducers: {
		[fetchAboutUs.pending]: (state) => {
			state.isLoading = true;
		},
		[fetchAboutUs.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.error = null;
			state.markup = action.payload;
		},
		[fetchAboutUs.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.error;
			state.markup = "";
		},
	},
});

export default aboutUsSlice.reducer;