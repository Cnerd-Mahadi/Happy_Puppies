import React, { createContext, useReducer } from "react";
import { MODAL_ACTION } from "../utilities/app-utilities";

const modalReducer = (value, action) => {
	switch (action.type) {
		case MODAL_ACTION.MENU.ON:
			return { menu: true };
		case MODAL_ACTION.MENU.OFF:
			return { menu: false };
		case MODAL_ACTION.CART.ON:
			return { cart: true };
		case MODAL_ACTION.CART.OFF:
			return { cart: false };
		case MODAL_ACTION.FORM.ON:
			return { form: true };
		case MODAL_ACTION.FORM.OFF:
			return { form: false };
		default:
			return value;
	}
};

export const OverlayContext = createContext();

export const OverLayProvider = ({ children }) => {
	const [overlay, setOverlay] = useReducer(modalReducer, {
		menu: false,
		cart: false,
		form: false,
	});

	return (
		<OverlayContext.Provider value={{ overlay, setOverlay }}>
			{children}
		</OverlayContext.Provider>
	);
};
