import React, { Fragment, useContext } from "react";
import { NavBar } from "../components/NavBar";
import { LogContext } from "../hooks/logged-in-hook";
import { DogMenu } from "./DogMenu";
import { Home } from "./Home";
import { Login } from "./Login";

export const Hero = () => {
	const useLogContext = useContext(LogContext);
	// console.log("Hero Level- DIST");

	return (
		<section id="hero" className="bg-[#F5F5F5]">
			<div className="safe-container max-w-7xl px-6">
				<NavBar />
				{useLogContext.value.loggedIn ? (
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
