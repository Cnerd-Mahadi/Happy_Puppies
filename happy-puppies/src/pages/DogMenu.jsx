import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DogCard } from "../components/DogCard";
import { callApi } from "../store/apiSlice";
import { cartAction } from "../store/cartSlice";
import { dogAction } from "../store/dogSlice";

const dogToObject = (value) => {
	return Object.values(value);
};

export const DogMenu = () => {
	const dogObject = dogToObject(useSelector((state) => state.api).data);
	const dogs = useSelector((state) => state.dogs);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(
			callApi(
				"https://react-projects-88217-default-rtdb.firebaseio.com/happy-puppies/dog-collection.json"
			)
		);
		if (dogObject.length) {
			dispatch(dogAction.initiate_dogs(dogObject));
		}
	}, [dogObject.length, dispatch]);

	console.log(dogObject, "FROM DOG");

	return (
		<section id="dog-menu">
			<div className="mx-auto grid max-w-7xl gap-y-10 py-24 px-2 md:grid-cols-2 md:gap-x-8 md:px-6 lg:grid-cols-3">
				{dogs.map((item) => {
					return (
						<DogCard
							key={item.id}
							item={item}
							action={dogAction}
							cart={cartAction}
						/>
					);
				})}
			</div>
		</section>
	);
};
