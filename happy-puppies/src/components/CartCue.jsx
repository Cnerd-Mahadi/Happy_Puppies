import React from "react";
import sample from "../images/dog_sample.jpg";

export const CartCue = () => {
	return (
		<div className="flex flex-row justify-between py-3">
			<div className="flex flex-row space-x-5">
				<img src={sample} alt="sample" className="w-16 rounded-lg" />
				<div className="flex flex-col pt-2">
					<h4 className="text-xl font-bold text-gray-900">Victor Garb</h4>
					<h4 className="text-xs font-medium text-gray-700">Breed: Calm</h4>
				</div>
			</div>
			<div className="flex items-center">
				<div className="flex flex-row items-center space-x-3 px-3 py-1">
					<button>
						<img
							src="https://cdn-icons-png.flaticon.com/512/169/169782.png"
							alt="add"
							className="w-4 duration-200 hover:scale-125"
						/>
					</button>
					<p className="font-medium text-zinc-800">4</p>
					<button>
						<img
							src="https://cdn-icons-png.flaticon.com/512/169/169783.png"
							alt="remove"
							className="w-4 duration-200 hover:scale-125"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};
