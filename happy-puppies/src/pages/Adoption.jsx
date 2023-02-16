import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import * as Yup from "yup";
import { InputElement } from "../components/InputElement";
import { SelectElement } from "../components/SelectElement";
import { dogAction } from "../store/dogSlice";
import { overlayAction } from "../store/overlaySlice";

const noImage =
	"https://st3.depositphotos.com/1156168/15107/v/600/depositphotos_151075440-stock-illustration-cinema-flat-icon.jpg";

const formInitials = {
	name: "",
	breed: "",
	speciality: "",
	amount: 1,
};

const validation = Yup.object({
	name: Yup.string().min(3).required("Dog's name required"),
	breed: Yup.string().required("Breed is not specified"),
	speciality: Yup.string()
		.required()
		.min(6, "Speciality needs to be more specific"),
});

export const Adoption = () => {
	const dispatch = useDispatch();
	const dogs = useSelector((state) => state.dogs);

	const opImage = (value) => {
		return dogs.find((item) => item.breed === value);
	};

	console.log(dogs);

	const onHandleSubmit = (values) => {
		dispatch(overlayAction.form_off());
		const originalItem = dogs.find((item) => item.breed === values.breed);
		const oldItem = dogs.find(
			(item) =>
				item.name === values.name &&
				item.speciality === values.speciality &&
				item.breed === originalItem.breed
		);

		if (oldItem)
			dispatch(dogAction.adopt_dog({ item: oldItem, amount: values.amount }));
		else {
			values.id = uuid().slice(0, 8);
			values.imageUrl = originalItem.imageUrl;
			values.breed = originalItem.breed;
			dispatch(dogAction.adopt_dog({ item: values }));
		}
		console.log(values);
	};

	const adoptionFormik = useFormik({
		initialValues: formInitials,
		onSubmit: onHandleSubmit,
		validationSchema: validation,
	});

	return (
		<form
			className="flex w-full flex-col"
			onSubmit={adoptionFormik.handleSubmit}>
			<div className="mb-10 flex items-center justify-between">
				<h3 className="w-full text-center text-3xl font-bold text-gray-900 md:text-4xl">
					Adoption Form
				</h3>
				<img
					onClick={() => {
						dispatch(overlayAction.form_off());
					}}
					src="https://cdn-icons-png.flaticon.com/512/1008/1008968.png"
					alt="cross-form"
					className="w-5 cursor-pointer"
				/>
			</div>
			<div className="mb-5 flex flex-col items-center space-y-4">
				<img
					src={
						adoptionFormik.values.breed
							? opImage(adoptionFormik.values.breed).imageUrl
							: noImage
					}
					alt="dog-pic"
					className="w-28 rounded-lg border-2 border-gray-400"
				/>

				{adoptionFormik.errors.breed && adoptionFormik.touched.breed && (
					<p className="text-xs text-red-500">Please select breed for photo</p>
				)}
			</div>
			<div className="mt-7 flex w-full flex-col space-y-3">
				<InputElement
					type="text"
					placeholder="Enter Dog's Name"
					label="name"
					formik={adoptionFormik}
				/>
				<InputElement
					type="number"
					placeholder="Enter The Amount"
					label="amount"
					formik={adoptionFormik}
				/>
				<SelectElement label="breed" formik={adoptionFormik} option={dogs} />
				<InputElement
					type="text"
					placeholder="Enter It's Speciality"
					label="speciality"
					formik={adoptionFormik}
				/>
			</div>
			<button
				type="submit"
				className="mx-auto mt-10 rounded-full bg-blue-500 px-14 py-2 font-bold text-white">
				Donate
			</button>
		</form>
	);
};
