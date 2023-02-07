import React from "react";
import { useDogsList } from "../hooks/useDogsList";

export const DogCard = ({ name, breed, speciality, amount, image }) => {
	// const { dogs, dogDispatch } = useDogsList();

	return (
		<div className="flex flex-col items-start rounded-lg bg-slate-900 p-6 shadow-xl">
			<div className="flex w-full flex-row items-center justify-between">
				<button
					// onClick={() => {
					// 	console.log(id);
					// }}
					className="flex flex-row items-center space-x-2 rounded-full bg-slate-700 px-4 py-2 text-white hover:bg-slate-800">
					<img
						src="https://cdn-icons-png.flaticon.com/512/9513/9513736.png"
						alt="paw"
						className="w-4"
					/>
					<p className="text-sm">Add to Cart</p>
				</button>
				<div className="rounded-xl bg-slate-700 px-4 py-2 text-sm text-white">
					🛒:<span className="text-orange-500"> {amount}</span>
				</div>
			</div>
			<div className="mt-8 flex w-full flex-row space-x-10">
				<img src={image} alt="sample" className="h-fit w-32 rounded-l-lg" />
				<div className="flex flex-col text-white">
					<h3 className="pb-8 text-3xl font-bold text-slate-200">{name}</h3>
					<p>
						<span className="text-gray-400">Breed:</span> {breed}
					</p>
					<p>
						<span className="text-gray-400">Origin:</span> {speciality}
					</p>
				</div>
			</div>
		</div>
	);
};
