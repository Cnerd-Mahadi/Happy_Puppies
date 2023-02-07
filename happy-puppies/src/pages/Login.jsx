import React, { useContext } from "react";
import { LogContext } from "../hooks/logged-in-hook";
import hero from "../images/bg-hero.jpg";
import { LOG_ACTION } from "../utilities/app-utilities";

export const Login = () => {
	const useLogContext = useContext(LogContext);

	return (
		<div className="flex min-h-screen items-center justify-center pt-5">
			<div className="flex w-full max-w-3xl flex-col space-y-8 rounded-lg bg-gray-200 p-6 pt-12 shadow-lg md:flex-row md:space-x-5 md:space-y-0">
				<div className="mx-auto w-1/2 rounded-xl">
					<img src={hero} alt="hero" className="rounded-xl" />
				</div>
				<div className="flex flex-col items-center">
					<h1 className="pb-16 text-5xl font-bold text-gray-800">Log In</h1>
					<div className="flex w-full flex-row items-center pb-8">
						<label htmlFor="name" className="w-3/5 text-lg font-medium">
							Name:
						</label>
						<input
							type="text"
							className="w-full rounded-lg bg-white py-1 px-4 shadow-md"
						/>
					</div>
					<div className="flex w-full flex-row items-center">
						<label htmlFor="name" className="w-3/5 text-lg font-medium">
							Password:
						</label>
						<input
							type="text"
							className="w-full rounded-lg bg-white py-1 px-4 shadow-md"
						/>
					</div>
					<button
						onClick={() => {
							localStorage.setItem(LOG_ACTION.LOG_VALUE, true);
							useLogContext.action.logDispatch({ type: LOG_ACTION.LOG_IN });
						}}
						className="mt-24 mb-10 rounded-full bg-emerald-700 px-12 py-2 text-lg font-bold text-white hover:bg-emerald-500">
						Log In
					</button>
				</div>
			</div>
		</div>
	);
};
