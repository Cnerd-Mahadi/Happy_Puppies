import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "./Cart";
import { Form } from "./Form";
import { NavMenuMobile } from "./NavMenuMobile";

export const Modal = () => {
	const dispatch = useDispatch();
	const overlay = useSelector((state) => state.overlay);
	return (
		<>
			{overlay.menu &&
				createPortal(
					<NavMenuMobile />,
					document.getElementById("overlay-menu")
				)}
			{overlay.cart &&
				createPortal(<Cart />, document.getElementById("overlay-cart"))}
			{overlay.form &&
				createPortal(<Form />, document.getElementById("overlay-form"))}
		</>
	);
};
