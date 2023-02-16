import { createSlice } from "@reduxjs/toolkit";

const overlaySlice = createSlice({
	name: "overlay",
	initialState: {
		menu: false,
		cart: false,
		form: false,
	},
	reducers: {
		menu_on: (state) => {
			return { menu: true };
		},
		menu_off: (state) => {
			return { menu: false };
		},
		form_on: (state) => {
			return { form: true };
		},
		form_off: (state) => {
			return { form: false };
		},
		cart_on: (state) => {
			return { cart: true };
		},
		cart_off: (state) => {
			return { cart: false };
		},
	},
});

export const overlayAction = overlaySlice.actions;
export const overlayReducer = overlaySlice.reducer;
