import React from "react";
import { useDispatch } from "react-redux";

export const CartCue = ({ item, action, dogAction, endLimit }) => {
	const dispatch = useDispatch();
	return (
		<div className="flex w-full flex-row justify-between py-3">
			<div className="flex w-9/12 flex-row space-x-5">
				<div>
					<img
						src={item.imageUrl}
						alt="sample"
						className="h-20 w-16 rounded-lg"
					/>
				</div>

				<div className="flex flex-col pt-2">
					<h4 className="text-sm font-bold text-gray-900 md:text-xl">
						{item.name}
					</h4>
					<h4 className="text-xs font-medium text-gray-700">{item.breed}</h4>
				</div>
			</div>
			<div className="flex w-3/12 items-center justify-center">
				<div className="flex flex-row items-center space-x-3">
					<button
						onClick={() => {
							dispatch(action.add_dog({ item: item, endLimit: endLimit }));
							dispatch(dogAction.minus_dog({ id: item.id }));
						}}>
						<img
							src="https://cdn-icons-png.flaticon.com/512/169/169782.png"
							alt="add"
							className="w-4 duration-200 hover:scale-125"
						/>
					</button>
					<p className="font-medium text-zinc-800">{item.amount}</p>
					<button
						onClick={() => {
							dispatch(action.minus_dog({ id: item.id }));
							dispatch(
								dogAction.add_dog({ item: item, endLimit: item.amount })
							);
						}}>
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
