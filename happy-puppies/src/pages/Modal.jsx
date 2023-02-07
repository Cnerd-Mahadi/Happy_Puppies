import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { OverlayContext } from "../hooks/overlay-hook";
import { Cart } from "./Cart";
import { Form } from "./Form";
import { NavMenuMobile } from "./NavMenuMobile";

export const Modal = () => {
	const overlayContext = useContext(OverlayContext);
	return (
		<>
			{overlayContext.overlay.menu &&
				createPortal(
					<NavMenuMobile />,
					document.getElementById("overlay-menu")
				)}
			{overlayContext.overlay.cart &&
				createPortal(<Cart />, document.getElementById("overlay-cart"))}
			{overlayContext.overlay.form &&
				createPortal(<Form />, document.getElementById("overlay-form"))}
		</>
	);
};
