import { useCallback, useEffect, useState } from "react";

export const useAPI = (url, options) => {
	const [data, setData] = useState([]);

	const getDogCollection = useCallback(() => {
		fetch(url, options)
			.then((res) => res.json())
			.then((result) => {
				console.log(data, "----DI---", result);
				setData(result);
			});
	}, []);

	useEffect(() => {
		getDogCollection();
	}, []);

	return data;
};
