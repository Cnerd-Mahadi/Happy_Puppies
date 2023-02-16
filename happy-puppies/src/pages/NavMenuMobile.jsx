import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logAction } from "../store/loginSlice";
import { overlayAction } from "../store/overlaySlice";
import { LOG_VALUE } from "../utilities/app-utilities";

export const NavMenuMobile = () => {
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	return (
		<>
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90 md:hidden"></div>
			<div className="z-5 fixed flex w-full flex-col items-center divide-y divide-gray-600 py-44 px-10 md:hidden">
				<button
					onClick={() => {
						dispatch(overlayAction.form_on());
					}}
					className="w-full py-5 text-slate-300 hover:text-orange-500">
					Donate
				</button>
				<button
					onClick={() => {
						dispatch(overlayAction.cart_on());
					}}
					className="group flex w-full flex-row items-center justify-center space-x-2 py-5 text-slate-300 hover:text-orange-500">
					<p>Go to Cart</p>
					{cart.length > 0 && (
						<p className="font-medium text-orange-500">({cart.length})</p>
					)}
				</button>
				<button
					onClick={() => {
						localStorage.removeItem(LOG_VALUE);
						dispatch(logAction.logout());
						dispatch(overlayAction.form_off());
					}}
					className="w-full py-5 text-slate-300 hover:text-orange-500">
					LogOut
				</button>
			</div>
		</>
	);
};
