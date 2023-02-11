import React, { useContext } from "react";
import { LogContext } from "../hooks/logged-in-hook";
import hero from "../images/bg-hero.jpg";
import { LOG_ACTION } from "../utilities/app-utilities";
import * as Yup from "yup";
import { useFormik } from "formik";
import { LoginInputElement } from "../components/LoginInputElement";

const formInitials = {
	name: "",
	password: "",
};

const validation = Yup.object({
	name: Yup.string().required("Enter Your Username"),
	password: Yup.string().required("Password is not entered"),
});

export const Login = () => {
	const useLogContext = useContext(LogContext);

	const onHandleSubmit = (values) => {
		console.log(values);
		localStorage.setItem(LOG_ACTION.LOG_VALUE, true);
		useLogContext.action.logDispatch({ type: LOG_ACTION.LOG_IN });
	};

	const loginFormik = useFormik({
		initialValues: formInitials,
		onSubmit: onHandleSubmit,
		validationSchema: validation,
	});

	return (
		<form onSubmit={loginFormik.handleSubmit}>
			<div className="flex min-h-screen items-center justify-center pt-5">
				<div className="flex w-full max-w-3xl flex-col space-y-8 rounded-lg bg-gray-200 p-4 pt-12 shadow-lg md:flex-row md:space-x-5 md:space-y-0 md:p-6">
					<div className="mx-auto w-1/2 rounded-xl">
						<img src={hero} alt="hero" className="rounded-xl" />
					</div>
					<div className="flex flex-col">
						<h1 className="pb-16 text-center text-5xl font-bold text-gray-800 md:text-start">
							Log In
						</h1>
						<LoginInputElement label="name" type="text" formik={loginFormik} />
						<LoginInputElement
							label="password"
							type="password"
							formik={loginFormik}
						/>
						<div className="flex justify-center">
							<button
								type="submit"
								className="mt-24 mb-10 rounded-full bg-emerald-700 px-12 py-2 text-lg font-bold text-white hover:bg-emerald-500">
								Log In
							</button>
						</div>
					</div>
				</div>
			</div>
		</form>
	);
};
