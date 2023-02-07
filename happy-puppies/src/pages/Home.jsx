import React from "react";
import hero from "../images/bg-hero.jpg";

export const Home = () => {
	return (
		<div className="both-flex w-full py-24">
			<div className="md:w-2/5">
				<img
					src={hero}
					alt="hero"
					className="mx-auto w-60 rounded-xl md:w-2/3"
				/>
			</div>
			<div className="flex flex-col items-center justify-center md:w-3/5 md:items-start">
				<div className="pt-10">
					<h1 className="text-center text-3xl font-bold text-slate-900 md:max-w-lg md:text-start md:text-7xl md:leading-tight">
						Adopt A Dog. Save A Life <span className="text-orange-500">:)</span>
					</h1>
					<p className="max-w-sm pt-8 text-center text-lg text-slate-500 md:max-w-lg md:pt-14 md:text-start md:text-2xl">
						Adopt a dog. Save a home. Make this world a better place.
					</p>
				</div>
			</div>
		</div>
	);
};
