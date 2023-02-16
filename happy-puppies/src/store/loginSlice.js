import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
	name: "login",
	initialState: false,
	reducers: {
		login: (state) => {
			return true;
		},
		logout: (state) => {
			return false;
		},
	},
});

export const logAction = loginSlice.actions;
export const loginReducer = loginSlice.reducer;
