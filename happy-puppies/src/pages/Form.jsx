import React, { useContext } from "react";
import { OverlayContext } from "../hooks/overlay-hook";
import { MODAL_ACTION } from "../utilities/app-utilities";
import { Adoption } from "./Adoption";

export const Form = () => {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 bottom-0 bg-black opacity-90"></div>
			<div className="fixed left-1/2 top-1/4 z-10 w-11/12 -translate-x-1/2 -translate-y-1/4 rounded-lg bg-gray-200 p-5 pb-16 md:max-w-xl">
				<Adoption />
			</div>
		</>
	);
};
