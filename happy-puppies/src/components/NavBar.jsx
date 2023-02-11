import React, { useCallback, useContext, useEffect, useState } from "react";
import { CartContext } from "../hooks/cart-hook";
import { LogContext } from "../hooks/logged-in-hook";
import { OverlayContext } from "../hooks/overlay-hook";
import logo from "../images/logo_dark.png";
import { Modal } from "../pages/Modal";
import { LOG_ACTION, MODAL_ACTION } from "../utilities/app-utilities";

export const NavBar = () => {
	const useLogContext = useContext(LogContext);
	const overlayContext = useContext(OverlayContext);
	const cartContext = useContext(CartContext);

	const handleResize = () => {
		if (window.matchMedia("(min-width: 768px)").matches) {
			overlayContext.setOverlay({ type: MODAL_ACTION.MENU.OFF });
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="flex flex-row items-center justify-between pt-10 pb-5 md:px-6">
			<div
				className={`${
					overlayContext.overlay.menu && "z-5"
				} rounded-full bg-white px-6 py-2 shadow-lg`}>
				<img src={logo} alt="logo" className="w-32" />
			</div>
			{useLogContext.value.loggedIn && (
				<div className="hidden flex-row items-center space-x-10 md:flex">
					<button
						onClick={() => {
							overlayContext.setOverlay({ type: MODAL_ACTION.FORM.ON });
						}}
						className="text-gray-600 hover:text-orange-500">
						Donate
					</button>
					<button
						onClick={() => {
							localStorage.removeItem(LOG_ACTION.LOG_VALUE);
							useLogContext.action.logDispatch({ type: LOG_ACTION.LOG_OUT });
						}}
						className="text-gray-600 hover:text-orange-500">
						LogOut
					</button>
					<div className="group">
						<button
							onClick={() => {
								overlayContext.setOverlay({ type: MODAL_ACTION.CART.ON });
							}}
							className="flex flex-row items-center space-x-2 rounded-full bg-white px-8 py-2 shadow-lg group-hover:bg-gray-800">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
								alt="cart"
								className="group-hover:cart-hover w-5"
							/>
							{cartContext.cart.length > 0 && (
								<p className="hover font-medium text-orange-500 group-hover:text-yellow-400">
									({cartContext.cart.length})
								</p>
							)}
						</button>
					</div>
				</div>
			)}
			<Modal />
			{useLogContext.value.loggedIn && (
				<div className="z-5 pr-3 md:hidden">
					<img
						src={
							overlayContext.overlay.menu
								? "https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
								: "https://cdn-icons-png.flaticon.com/512/56/56763.png"
						}
						alt="menu-mobile"
						className={`w-5 cursor-pointer duration-200 ${
							overlayContext.overlay.menu && "rotate-180"
						}`}
						onClick={() => {
							if (overlayContext.overlay.menu)
								overlayContext.setOverlay({ type: MODAL_ACTION.MENU.OFF });
							else overlayContext.setOverlay({ type: MODAL_ACTION.MENU.ON });
						}}
					/>
				</div>
			)}
		</div>
	);
};
