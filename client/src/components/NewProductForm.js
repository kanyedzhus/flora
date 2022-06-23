import React, { useState, useEffect } from "react";

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

	const style = {
		width: "100%",
		maxWidth: "330px",
		padding: "15px",
		margin: "auto",
	};

	return (
		<div style={style}>
			<form>
				<h2 className="h3 mb-3 fw-normal text-center">Add a product</h2>
				<div className="form-group mb-3">
					<label htmlFor="productName">Product Name</label>
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
					<label htmlFor="productDescription">Product Description</label>
					<textarea
						className="form-control py-1"
						id="productDescription"
						name="description"
						value={productDetails.description}
						onChange={handleInputChange}
					/>
				</div>
				<div className="form-group mb-3">
					{" "}
					<label htmlFor="imgURL">Product Image</label>
					<input type="file" className="form-control" id="imgURL" />
				</div>

				<div className="form-group mb-3">
					{" "}
					<label htmlFor="price">Price</label>
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
					<label htmlFor="quantity">Stock</label>
					<input
						type="number"
						className="form-control py-1"
						id="quantity"
						name="quantity"
						value={productDetails.quantity}
						onChange={handleInputChange}
					/>
				</div>

				<div className="form-group mb-3">
					<label htmlFor="easyCare">Low Maintainence</label>
					<input
						type="checkbox"
						value="easyCare"
						className="form-control py-1"
						id="easyCare"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="petFriendly">Pet Friendly</label>
					<input
						type="checkbox"
						value="petFriendly"
						className="form-control py-1"
						id="petFriendly"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="airPurifying">Air Purifying</label>
					<input
						value="airPurifying"
						type="checkbox"
						className="form-control py-1"
						id="airPurifying"
						onChange={handleCheckboxChange}
					/>
				</div>
				<div className="form-group mb-3">
					<h1>Light Requirements</h1>
					<label htmlFor="lowLight"> Low </label>
					<input
						className="form-control"
						type="radio"
						name="light"
						value="low"
						id="lowLight"
						onChange={handleInputChange}
					/>

					<label htmlFor="midLight"> Medium </label>
					<input
						className="form-control"
						type="radio"
						name="light"
						value="medium"
						id="midLight"
						onChange={handleInputChange}
					/>

					<label htmlFor="highLight"> High </label>
					<input
						className="form-check-input"
						type="radio"
						name="light"
						value="high"
						id="highLight"
						onChange={handleInputChange}
					/>
				</div>
				<button className="w-100 btn btn-md btn-outline-primary" type="submit">
					Create Product
				</button>
			</form>
		</div>
	);
}
