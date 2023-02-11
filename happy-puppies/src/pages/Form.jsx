import React, { useContext } from "react";
import { OverlayContext } from "../hooks/overlay-hook";
import { MODAL_ACTION } from "../utilities/app-utilities";
import { Adoption } from "./Adoption";

export const Form = () => {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90"></div>
			<div className="fixed top-4 left-1/2 bottom-10 z-10 w-11/12 -translate-x-1/2 overflow-auto rounded-lg bg-white p-5 md:bottom-1 md:max-w-lg md:pb-16">
				<Adoption />
			</div>
		</>
	);
};
