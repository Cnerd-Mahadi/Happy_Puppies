import { memo } from "react";
import { useAPI } from "./useAPI";

const dogUrl =
	"https://react-projects-88217-default-rtdb.firebaseio.com/happy-puppies/dog-collection.json";

export const useGetDogInfo = () => {
	return Object.values(useAPI(dogUrl, {}));
};
