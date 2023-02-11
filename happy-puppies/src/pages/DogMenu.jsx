import React, { useContext } from "react";
import { DogCard } from "../components/DogCard";
import { CartContext } from "../hooks/cart-hook";
import { DogContext } from "../hooks/dog-hook";

export const DogMenu = () => {
	const dogContext = useContext(DogContext);
	const cartContext = useContext(CartContext);
	const dogs = dogContext.dogs;

	return (
		<section id="dog-menu">
			<div className="mx-auto grid max-w-7xl gap-y-10 py-24 px-2 md:grid-cols-2 md:gap-x-8 md:px-6 lg:grid-cols-3">
				{dogs.map((item) => {
					return (
						<DogCard
							key={item.id}
							item={item}
							action={dogContext.dogActions}
							cart={cartContext.cartActions}
						/>
					);
				})}
			</div>
		</section>
	);
};
