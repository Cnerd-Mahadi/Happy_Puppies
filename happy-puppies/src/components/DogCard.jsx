import React from "react";
import { useDispatch } from "react-redux";

export const DogCard = ({ item, action, cart }) => {
	const dispatch = useDispatch();
	return (
		<div className="flex flex-col items-start rounded-lg bg-slate-900 p-6 shadow-xl">
			<div className="flex w-full flex-row items-center justify-between">
				<button
					onClick={() => {
						dispatch(action.minus_dog({ id: item.id }));
						dispatch(cart.add_dog({ item: item, endLimit: item.amount }));
					}}
					className="flex flex-row items-center space-x-2 rounded-full bg-slate-700 px-4 py-2 text-white hover:bg-slate-800">
					<img
						src="https://cdn-icons-png.flaticon.com/512/9513/9513736.png"
						alt="paw"
						className="w-4"
					/>
					<p className="text-sm">
						{item.amount > 0 ? "Add to Cart" : "Out of Stock"}
					</p>
				</button>
				<div className="rounded-xl bg-slate-700 px-4 py-2 text-sm text-white">
					🛒:<span className="text-orange-500"> {item.amount}</span>
				</div>
			</div>
			<div className="mt-8 flex w-full flex-row space-x-5">
				<div className=" w-20 md:h-32 md:w-36">
					<img
						src={item.imageUrl}
						alt="sample"
						className="h-1/2 w-full rounded-l-lg md:h-24 md:w-2/3"
					/>
				</div>
				<div className="flex flex-col text-white">
					<h3 className="pb-6 text-2xl font-bold text-slate-200 md:text-3xl">
						{item.name}
					</h3>
					<p className="text-sm md:text-base">
						<span className=" text-gray-400">Breed:</span> {item.breed}
					</p>
					<p className="text-sm md:text-base">
						<span className=" text-gray-400 ">Speciality:</span>{" "}
						{item.speciality}
					</p>
				</div>
			</div>
		</div>
	);
};
