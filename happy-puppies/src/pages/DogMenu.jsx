import React, { useState } from "react";
import { DogCard } from "../components/DogCard";
import { useDogsList } from "../hooks/useDogsList";
import { useDogs } from "../hooks/useGetDogInfo";

export const DogMenu = () => {
	// const { dogs, dogDispatch } =
	useDogsList();
	return (
		<section id="dog-menu">
			<div className="mx-auto grid max-w-7xl gap-y-10 py-24 px-6 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3">
				{/* {dogs.map((item) => {
					return (
						<DogCard
							key={item.id}
							name={item.name}
							amount={item.amount}
							speciality={item.speciality}
							breed={item.breed}
							image={item.imageUrl}
							// id={item.id}
						/>
					);
				})} */}
			</div>
		</section>
	);
};
