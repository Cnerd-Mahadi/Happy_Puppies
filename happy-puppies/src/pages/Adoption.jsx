import React, { useContext } from "react";
import { CartCue } from "../components/CartCue";
import { OverlayContext } from "../hooks/overlay-hook";
import { MODAL_ACTION } from "../utilities/app-utilities";

export const Adoption = () => {
	const overlayContext = useContext(OverlayContext);

	return (
		<form className="flex w-full flex-col">
			<div className="mb-10 flex items-center justify-between">
				<h3 className="w-full text-center text-4xl font-bold text-gray-900">
					Adoption Form
				</h3>
				<img
					onClick={() => {
						overlayContext.setOverlay({ type: MODAL_ACTION.FORM.OFF });
					}}
					src="https://cdn-icons-png.flaticon.com/512/1008/1008968.png"
					alt="cross-form"
					className="w-5 cursor-pointer"
				/>
			</div>
			<div className="mb-5 flex flex-col items-center space-y-4">
				<img
					src="https://st3.depositphotos.com/1156168/15107/v/600/depositphotos_151075440-stock-illustration-cinema-flat-icon.jpg"
					alt="no-image"
					className="w-28 rounded-lg border-2 border-gray-400"
				/>
				<button className="rounded-full bg-blue-500 px-8 py-2 font-bold text-white">
					Upload Image
				</button>
			</div>
			<div className="mt-7 flex w-full flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-5">
				<div className="flex flex-row items-center space-x-10 md:w-1/2 md:space-x-0">
					<label htmlFor="name" className="font-medium text-gray-700 md:w-1/3">
						Name:
					</label>
					<input
						type="text"
						className="w-3/5 rounded-lg bg-white py-1 px-4 shadow-md md:w-2/3"
					/>
				</div>
				<div className="flex flex-row items-center space-x-10 md:w-1/2 md:space-x-0">
					<label htmlFor="name" className="font-medium text-gray-700 md:w-1/3">
						Breed:
					</label>
					<input
						type="text"
						className="w-3/5 rounded-lg bg-white py-1 px-4 shadow-md md:w-2/3"
					/>
				</div>
			</div>
			<div className="items-cente mt-8 flex w-full flex-row space-x-3 md:space-x-0">
				<label htmlFor="name" className="font-medium text-gray-700 md:w-1/6">
					Speciality:
				</label>
				<input
					type="text"
					className="w-3/5 rounded-lg bg-white py-1 px-4 shadow-md md:w-3/6"
				/>
			</div>
			<button className="mx-auto mt-20 rounded-full bg-blue-500 px-14 py-2 font-bold text-white">
				Donate
			</button>
		</form>
	);
};
