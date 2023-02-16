import { createSlice } from "@reduxjs/toolkit";

const dogSlice = createSlice({
	name: "dogs",
	initialState: [],
	reducers: {
		add_dog: (state, action) => {
			const oldItem = state.find((item) => item.id === action.payload.item.id);
			if (oldItem) {
				if (action.payload.endLimit > 0) {
					oldItem.amount += 1;
				}
			} else {
				state.push({ ...action.payload.item, amount: 1 });
			}
		},

		minus_dog: (state, action) => {
			const foundItem = state.find(
				(item) => item.id === action.payload.id && item.amount > 0
			);
			if (foundItem) foundItem.amount -= 1;
		},

		adopt_dog: (state, action) => {
			const oldItem = state.find((item) => item.id === action.payload.item.id);
			if (oldItem) {
				oldItem.amount += action.payload.amount;
			} else {
				state.push({ ...action.payload.item });
			}
		},
		initiate_dogs: (state, action) => {
			return action.payload;
		},
	},
});

export const dogAction = dogSlice.actions;
export const dogReducer = dogSlice.reducer;
