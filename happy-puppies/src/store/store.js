import { configureStore } from "@reduxjs/toolkit";
import { apiReducer } from "./apiSlice";
import { cartReducer } from "./cartSlice";
import { dogReducer } from "./dogSlice";
import { loginReducer } from "./loginSlice";
import { overlayReducer } from "./overlaySlice";

export const store = configureStore({
	reducer: {
		login: loginReducer,
		overlay: overlayReducer,
		dogs: dogReducer,
		cart: cartReducer,
		api: apiReducer,
	},
});
