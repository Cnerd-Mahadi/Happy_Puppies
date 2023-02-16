import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { NavBar } from "../components/NavBar";
import { logAction } from "../store/loginSlice";
import { LOG_VALUE } from "../utilities/app-utilities";
import { DogMenu } from "./DogMenu";
import { Home } from "./Home";
import { Login } from "./Login";

export const Hero = () => {
	const loggedIn = useSelector((state) => state.login);
	const dispatch = useDispatch();

	if (localStorage.getItem(LOG_VALUE)) dispatch(logAction.login());

	return (
		<section id="hero" className="bg-[#F5F5F5]">
			<div className="safe-container max-w-7xl px-6">
				<NavBar />
				{loggedIn ? (
					<>
						<Home />
						<DogMenu />
					</>
				) : (
					<Login />
				)}
			</div>
		</section>
	);
};
