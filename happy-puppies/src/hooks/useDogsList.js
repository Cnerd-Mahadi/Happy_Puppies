import { useCallback, useEffect, useMemo, useReducer } from "react";
import { DOG_ACTION } from "../utilities/app-utilities";
import { useGetDogInfo } from "./useGetDogInfo";

const dogReducer = (value, action) => {
	switch (action.type) {
		case DOG_ACTION.INITIAL:
			return action.payload;
		case DOG_ACTION.ADD_DOG:
			return;
		case DOG_ACTION.MINUS_DOG:
			return;
		default:
			return;
	}
};

const getDogList = (temp, dogDispatch) => {
	dogDispatch({ type: DOG_ACTION.INITIAL, payload: temp });
};

export const useDogsList = () => {
	// const temp =
	useGetDogInfo();
	// const [dogs, dogDispatch] = useReducer(dogReducer, temp);
	// useEffect(() => {
	// 	getDogList(temp, dogDispatch);
	// }, []);
	// return { dogs, dogDispatch };
	// console.log(temp);
};
