import produce from "immer";
import React, { createContext, useReducer } from "react";
import { useImmerReducer } from "use-immer";
import { CART_ACTION } from "../utilities/app-utilities";

export const CartContext = createContext();

const cartReducer = (value, action) => {
	switch (action.type) {
		case CART_ACTION.ADD_DOG: {
			let gotIt = false;
			value.find((item) => {
				if (item.id === action.payload.id) {
					if (action.endLimit <= 0) gotIt = true;
					else {
						item.amount += 1;
						gotIt = true;
					}
				}
			});
			if (!gotIt) {
				if (action.endLimit > 0) {
					value.push({
						...action.payload,
						amount: 1,
					});
				}
			}
			return value;
		}

		case CART_ACTION.MINUS_DOG: {
			value.find((item) => {
				if (item.id === action.payload && item.amount > 0) item.amount -= 1;
			});
			return value;
		}

		case CART_ACTION.ZERO_OUT: {
			return value.filter((item) => item.amount !== 0);
		}

		case CART_ACTION.CLEAR_CART: {
			return [];
		}

		default:
			return value;
	}
};

export const CartProvider = ({ children }) => {
	const [cart, cartActions] = useImmerReducer(cartReducer, []);

	console.log(cart);

	return (
		<CartContext.Provider value={{ cart, cartActions }}>
			{children}
		</CartContext.Provider>
	);
};
