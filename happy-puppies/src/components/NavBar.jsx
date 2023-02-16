import React, { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { useSelector } from "react-redux/es/hooks/useSelector";
import logo from "../images/logo_dark.png";
import { Modal } from "../pages/Modal";
import { logAction } from "../store/loginSlice";
import { overlayAction } from "../store/overlaySlice";
import { LOG_VALUE } from "../utilities/app-utilities";

export const NavBar = () => {
	const dispatch = useDispatch();
	const loggedIn = useSelector((state) => state.login);
	const overlay = useSelector((state) => state.overlay);
	const cart = useSelector((state) => state.cart);

	const handleResize = () => {
		if (window.matchMedia("(min-width: 768px)").matches) {
			dispatch(overlayAction.menu_off());
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
					overlay.menu && "z-5"
				} rounded-full bg-white px-6 py-2 shadow-lg`}>
				<img src={logo} alt="logo" className="w-32" />
			</div>
			{loggedIn && (
				<div className="hidden flex-row items-center space-x-10 md:flex">
					<button
						onClick={() => {
							dispatch(overlayAction.form_on());
						}}
						className="text-gray-600 hover:text-orange-500">
						Donate
					</button>
					<button
						onClick={() => {
							localStorage.removeItem(LOG_VALUE);
							dispatch(logAction.logout());
						}}
						className="text-gray-600 hover:text-orange-500">
						LogOut
					</button>
					<div className="group">
						<button
							onClick={() => {
								dispatch(overlayAction.cart_on());
							}}
							className="flex flex-row items-center space-x-2 rounded-full bg-white px-8 py-2 shadow-lg group-hover:bg-gray-800">
							<img
								src="https://cdn-icons-png.flaticon.com/512/3514/3514491.png"
								alt="cart"
								className="group-hover:cart-hover w-5"
							/>
							{cart.length > 0 && (
								<p className="hover font-medium text-orange-500 group-hover:text-yellow-400">
									({cart.length})
								</p>
							)}
						</button>
					</div>
				</div>
			)}
			<Modal />
			{loggedIn && (
				<div className="z-5 pr-3 md:hidden">
					<img
						src={
							overlay.menu
								? "https://cdn-icons-png.flaticon.com/512/1828/1828665.png"
								: "https://cdn-icons-png.flaticon.com/512/56/56763.png"
						}
						alt="menu-mobile"
						className={`w-5 cursor-pointer duration-200 ${
							overlay.menu && "rotate-180"
						}`}
						onClick={() => {
							if (overlay.menu) dispatch(overlayAction.menu_off());
							else dispatch(overlayAction.menu_on());
						}}
					/>
				</div>
			)}
		</div>
	);
};
