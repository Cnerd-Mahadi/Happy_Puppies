import React from "react";

export const LoginInputElement = ({ type, label, formik }) => {
	const touch = formik.touched[label];
	const error = formik.errors[label];
	const value = formik.values[label];

	return (
		<div className="flex flex-col space-y-4 pb-8">
			<div className="flex w-full flex-row">
				<div className="w-4/6">
					<label htmlFor={label} className="text-lg font-medium capitalize">
						{label}
					</label>
				</div>
				<input
					type={type}
					id={label}
					name={label}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={value}
					className="w-full rounded-lg bg-white py-1 px-4 shadow-md focus:outline-none"
				/>
			</div>
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
	);
};
