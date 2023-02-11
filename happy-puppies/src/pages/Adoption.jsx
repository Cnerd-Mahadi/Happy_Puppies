import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { OverlayContext } from "../hooks/overlay-hook";
import { DOG_ACTION, MODAL_ACTION } from "../utilities/app-utilities";
import * as Yup from "yup";
import { InputElement } from "../components/InputElement";
import { SelectElement } from "../components/SelectElement";
import { dogOptionList } from "../utilities/dogOptionList";
import { DogContext } from "../hooks/dog-hook";
import { v4 as uuid } from "uuid";

const noImage =
	"https://st3.depositphotos.com/1156168/15107/v/600/depositphotos_151075440-stock-illustration-cinema-flat-icon.jpg";

const opImage = (value) => {
	return dogOptionList.find((item) => item.value === value).id;
};

const formInitials = {
	name: "",
	breed: dogOptionList[0].value,
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
	const dogContext = useContext(DogContext);
	const overlayContext = useContext(OverlayContext);

	const onHandleSubmit = (values) => {
		overlayContext.setOverlay({ type: MODAL_ACTION.FORM.OFF });
		let gotIt = false;
		let breedOrigin = dogOptionList.find(
			(item) => item.value === values.breed
		).label;
		let image = dogOptionList.find((item) => item.value === values.breed).id;
		console.log(breedOrigin);
		dogContext.dogs.find((item) => {
			if (
				item.name === values.name &&
				item.speciality === values.speciality &&
				item.breed === breedOrigin
			) {
				gotIt = true;
				dogContext.dogActions({
					type: DOG_ACTION.DOG_ADOPT,
					payload: item,
					amount: values.amount,
				});
				console.log("OLD");
			}
		});
		if (!gotIt) {
			values.id = uuid().slice(0, 8);
			values.image = image;
			values.breed = breedOrigin;
			dogContext.dogActions({
				type: DOG_ACTION.DOG_ADOPT,
				payload: values,
			});
			console.log("NEW");
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
						overlayContext.setOverlay({ type: MODAL_ACTION.FORM.OFF });
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
							? require(`./../images/dog-images/${opImage(
									adoptionFormik.values.breed
							  )}.jpg`)
							: noImage
					}
					alt="dog-image"
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
				<SelectElement
					label="breed"
					formik={adoptionFormik}
					option={dogOptionList}
				/>
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
