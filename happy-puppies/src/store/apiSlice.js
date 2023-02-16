import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const callApi = createAsyncThunk("api/callApi", async (url) => {
	const result = await fetch(url);
	return result.json();
});

const apiSlice = createSlice({
	name: "api",
	initialState: {
		data: [],
		loading: true,
		status: "No Status",
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(callApi.fulfilled, (state, action) => {
				state.data = action.payload;
				state.loading = false;
				state.status = "Data received";
				return state;
			})
			.addCase(callApi.pending, (state, action) => {
				state.loading = true;
				state.status = "Data Pending";
			})
			.addCase(callApi.rejected, (state, action) => {
				state.loading = true;
				state.status = "Data rejected";
			});
	},
});

export const apiAction = apiSlice.actions;
export const apiReducer = apiSlice.reducer;
