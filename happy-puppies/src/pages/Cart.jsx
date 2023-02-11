import React, { useContext } from "react";
import { CartCue } from "../components/CartCue";
import { CartContext } from "../hooks/cart-hook";
import { DogContext } from "../hooks/dog-hook";
import { OverlayContext } from "../hooks/overlay-hook";
import { CART_ACTION, MODAL_ACTION } from "../utilities/app-utilities";

export const Cart = () => {
	const overlayContext = useContext(OverlayContext);
	const dogContext = useContext(DogContext);
	const cartContext = useContext(CartContext);
	const cart = cartContext.cart;

	return (
		<>
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90"></div>
			<div className="fixed top-4 bottom-2 left-1/2 z-10 w-11/12 -translate-x-1/2 overflow-y-scroll rounded-lg bg-slate-50 md:max-w-lg">
				<div id="cart" className="w-full px-6">
					<h3 className="py-16 text-center text-4xl font-bold text-gray-900">
						Total Adoption
					</h3>
					<div className="flex flex-col justify-between">
						<div>
							{cart.map((item) => {
								return (
									<CartCue
										key={item.id}
										item={item}
										action={cartContext.cartActions}
										dogAction={dogContext.dogActions}
										endLimit={
											dogContext.dogs.find((dog) => dog.id === item.id).amount
										}
									/>
								);
							})}
						</div>
						<div className="flex flex-row justify-center space-x-10 py-16 md:space-x-20">
							<button
								onClick={() => {
									overlayContext.setOverlay({ type: MODAL_ACTION.CART.OFF });
									cartContext.cartActions({
										type: CART_ACTION.CLEAR_CART,
									});
								}}
								className="rounded-lg bg-blue-600 px-8 py-2 font-bold text-white hover:bg-blue-400">
								Order
							</button>
							<button
								onClick={() => {
									overlayContext.setOverlay({ type: MODAL_ACTION.CART.OFF });
									cartContext.cartActions({
										type: CART_ACTION.ZERO_OUT,
									});
								}}
								className="rounded-lg bg-blue-600 px-8 py-2 font-bold text-white hover:bg-blue-400">
								Cancel
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
