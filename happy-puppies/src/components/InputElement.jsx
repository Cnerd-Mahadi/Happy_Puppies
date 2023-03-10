import React from "react";

export const InputElement = ({ type, placeholder, label, formik }) => {
	const touch = formik.touched[label];
	const error = formik.errors[label];
	const value = formik.values[label];

	return (
		<div className="flex flex-col">
			<div className="flex flex-row items-center space-x-2 px-1 py-1">
				<p id={label} className="text-sm capitalize text-gray-500">
					{label}
				</p>
				{touch && error && (
					<div className="flex flex-row items-center space-x-1">
						<img
							src="https://cdn-icons-png.flaticon.com/512/7887/7887083.png"
							alt="info"
							className="h-3 w-3"
						/>
						<p id="error" className="text-xs text-red-500">
							{error.charAt(0).toUpperCase() + error.slice(1)}
						</p>
					</div>
				)}
			</div>
			<input
				type={type}
				id={label}
				name={label}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
				value={value}
				className={`rounded-lg border ${
					touch && error ? "border-red-600" : "border-gray-400"
				} bg-white py-2 px-4 text-xs font-normal focus:outline-none`}
				placeholder={placeholder}
				min={1}
			/>
		</div>
	);
};
