import React, { useState, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

export default function SellerRegistrationForm() {
	const [productDetails, setProductDetails] = useState({
		productName: "",
		description: "",
		imgURL: null,
		price: "",
		quantity: "",
		light: "",
		easyCare: false,
		petFriendly: false,
		airPurifying: false,
	});

	useEffect(() => {
		console.log(productDetails);
	});

	const handleCheckboxChange = (event) => {
		// get value and checked from event.target. checked is true when checked
		const { value, checked } = event.target;
		console.log(`${value} is ${checked}`);

		// when the user checks the box, keep everything already in state but update the property with the same name as event.target.value to true
		if (checked) {
			setProductDetails({
				...productDetails,
				[value]: true,
			});
		} else {
			setProductDetails({
				...productDetails,
				[value]: false,
			});
		}
	};

	const handleInputChange = (event) => {
		// destructure the name and value properties from event.target
		const { name, value } = event.target;

		// update state using spread operator and es6 computed property
		// keep everything in state as is, but update the property with the same name as event.target.name to have its value as event.target.value
		setProductDetails({
			...productDetails,
			[name]: value,
		});
	};

	// this function will update the imgURL property in state
	const handleFileChange = (event) => {
		// in event.target we have access to a files property for input type file. This is an array of objects with the file or files uploaded. Accessing one file would be at index 0.

		console.log(event.target.files[0]);
		setProductDetails({
			...productDetails,
			imgURL: event.target.files[0],
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// formdata lets us create a set of key-value pairs to send form data. this will create an empty formdata object.
		let newProduct = new FormData();
		// add key value pairs to formdata obj. the values are taken from state. both .set and .append work. .set will overwrite an existing key's value, while append will simply add on to the end

		newProduct.set("productName", productDetails.productName);
		newProduct.set("description", productDetails.description);
		newProduct.set("imgURL", productDetails.imgURL);
		newProduct.set("price", productDetails.price);
		newProduct.set("quantity", productDetails.quantity);
		newProduct.set("light", productDetails.light);
		newProduct.set("easyCare", productDetails.easyCare);
		newProduct.set("petFriendly", productDetails.petFriendly);
		newProduct.set("airPurifying", productDetails.airPurifying);

		try {
			const response = await fetch("http://localhost:5000/products", {
				method: "POST",
				// sending data of type formdata
				body: newProduct,
			});

			if (response.ok) {
				const jsonResponse = await response.json();
				console.log({ jsonResponse });
				toast.success("Your product has been successfully added!");
			} else {
				// if response is not ok, then I need to redefine the response object and await it. It will be the object with the error message.
				const error = await response.json();
				console.log(error);
				toast.error(error.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const style = {
		width: "100%",
		maxWidth: "50%",
		padding: "15px",
		margin: "auto",
	};

	return (
		<div style={style}>
			<form
				onSubmit={handleSubmit}
				action="/products"
				method="POST"
				encType="multipart/form-data"
			>
				<h2 className="h3 mb-3 fw-normal text-center">Add a product</h2>
				<div className="form-group mb-3">
					<label htmlFor="productName" className="fw-bold mb-1">
						Product Name
					</label>
					<input
						type="text"
						className="form-control py-1"
						id="productName"
						name="productName"
						value={productDetails.productName}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="productDescription" className="fw-bold mb-1">
						Product Description
					</label>
					<textarea
						rows="5"
						className="form-control py-1"
						id="productDescription"
						name="description"
						value={productDetails.description}
						onChange={handleInputChange}
					/>
				</div>

				{/*************************** PRODUCT IMAGE ****************************/}

				<div className="form-group mb-3">
					{" "}
					<label htmlFor="imgURL " className="fw-bold mb-1">
						Product Image
					</label>
					<input
						type="file"
						className="form-control"
						id="imgURL"
						onChange={handleFileChange}
					/>
				</div>
				<div className="d-flex justify-content-between">
					<div className="form-group mb-3">
						{" "}
						<label className="fw-bold mb-1" htmlFor="price">
							Price
						</label>
						<input
							type="number"
							className="form-control"
							id="number"
							name="price"
							value={productDetails.price}
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group mb-3">
						<label className="fw-bold mb-1" htmlFor="quantity">
							Stock
						</label>
						<input
							type="number"
							className="form-control"
							id="quantity"
							name="quantity"
							value={productDetails.quantity}
							onChange={handleInputChange}
						/>
					</div>
				</div>

				{/*************************** FEATURE CHECKBOXES ****************************/}
				<div className="d-flex justify-content-between">
					<h6>Features:</h6>
					<div className="form-group mb-3">
						<label htmlFor="easyCare" className="me-2">
							Easy
						</label>
						<input
							type="checkbox"
							value="easyCare"
							className="form-check-input py-1"
							id="easyCare"
							onChange={handleCheckboxChange}
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="petFriendly" className="me-2">
							Pet Friendly
						</label>
						<input
							type="checkbox"
							value="petFriendly"
							className="form-check-input py-1"
							id="petFriendly"
							onChange={handleCheckboxChange}
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="airPurifying" className="me-2">
							Air Purifying
						</label>
						<input
							value="airPurifying"
							type="checkbox"
							className="form-check-input py-1"
							id="airPurifying"
							onChange={handleCheckboxChange}
						/>
					</div>
				</div>

				{/*************************** LIGHT NEEDS ****************************/}

				<div className="d-flex justify-content-between ">
					{" "}
					<h6>Light Needs:</h6>
					<div className="form-group mb-3">
						<label htmlFor="lowLight" className="me-2">
							{" "}
							Low{" "}
						</label>
						<input
							className="form-check-input "
							type="radio"
							name="light"
							value="low"
							id="lowLight"
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="midLight" className="me-2">
							{" "}
							Medium{" "}
						</label>
						<input
							className="form-check-input"
							type="radio"
							name="light"
							value="medium"
							id="midLight"
							onChange={handleInputChange}
						/>
					</div>
					<div className="form-group mb-3">
						<label htmlFor="highLight" className="me-2">
							{" "}
							High{" "}
						</label>
						<input
							className="form-check-input"
							type="radio"
							name="light"
							value="high"
							id="highLight"
							onChange={handleInputChange}
						/>
					</div>
				</div>
				<button className="w-100 btn btn-md btn-outline-primary" type="submit">
					Create Product
				</button>
			</form>
		</div>
	);
}
