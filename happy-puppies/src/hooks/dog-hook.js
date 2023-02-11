import { createContext } from "react";
import { useImmerReducer } from "use-immer";
import { DOG_ACTION } from "../utilities/app-utilities";
import { dogList } from "../utilities/dogList";

export const DogContext = createContext();

const dogReducer = (value, action) => {
	switch (action.type) {
		case DOG_ACTION.ADD_DOG: {
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
				value.push({ ...action.payload, amount: 1 });
			}
			return value;
		}

		case DOG_ACTION.MINUS_DOG: {
			value.find((item) => {
				if (item.id === action.payload && item.amount > 0) item.amount -= 1;
			});
			return value;
		}

		case DOG_ACTION.DOG_ADOPT: {
			let gotIt = false;
			value.find((item) => {
				if (item.id === action.payload.id) {
					item.amount += action.amount;
					gotIt = true;
				}
			});
			if (!gotIt) {
				value.push({ ...action.payload });
			}
			return value;
		}

		default:
			return value;
	}
};

export const DogProvider = ({ children }) => {
	const [dogs, dogActions] = useImmerReducer(dogReducer, dogList);

	return (
		<DogContext.Provider value={{ dogs, dogActions }}>
			{children}
		</DogContext.Provider>
	);
};
