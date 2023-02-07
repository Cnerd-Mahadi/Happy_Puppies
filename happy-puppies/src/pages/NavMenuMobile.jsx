import React, { useContext } from "react";
import { OverlayContext } from "../hooks/overlay-hook";
import { MODAL_ACTION } from "../utilities/app-utilities";

export const NavMenuMobile = () => {
	const overlayContext = useContext(OverlayContext);
	return (
		<>
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90 md:hidden"></div>
			<div className="z-5 fixed flex w-full flex-col items-center divide-y divide-gray-600 py-44 px-10 md:hidden">
				<button
					onClick={() => {
						overlayContext.setOverlay({ type: MODAL_ACTION.FORM.ON });
					}}
					className="w-full py-5 text-slate-300 hover:text-orange-500">
					Donate
				</button>
				<button
					onClick={() => {
						overlayContext.setOverlay({ type: MODAL_ACTION.CART.ON });
					}}
					className="w-full py-5 text-slate-300 hover:text-orange-500">
					Go to Cart
				</button>
				<button className="w-full py-5 text-slate-300 hover:text-orange-500">
					LogOut
				</button>
			</div>
		</>
	);
};
