import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		add_dog: (state, action) => {
			const oldItem = state.find((item) => item.id === action.payload.item.id);
			if (oldItem) {
				if (action.payload.endLimit > 0) oldItem.amount += 1;
			} else {
				if (action.payload.endLimit > 0) {
					state.push({
						...action.payload.item,
						amount: 1,
					});
				}
			}
		},

		minus_dog: (state, action) => {
			const foundItem = state.find(
				(item) => item.id === action.payload.id && item.amount > 0
			);
			if (foundItem) foundItem.amount -= 1;
		},

		zero_out: (state, action) => {
			return state.filter((item) => item.amount !== 0);
		},

		clear_cart: (state, action) => {
			return [];
		},
	},
});

export const cartAction = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
