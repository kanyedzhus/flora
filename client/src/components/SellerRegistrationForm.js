import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function SellerRegistrationForm() {
	const navigate = useNavigate();
	const style = {
		width: "100%",
		maxWidth: "330px",
		padding: "15px",
		margin: "auto",
	};

	const [credentials, setCredentials] = useState({
		userName: "",
		email: "",
		password: "",
		firstName: "",
		lastName: "",
		role: "",
		storeName: "",
		storeDescription: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const registerSeller = async (event) => {
		event.preventDefault();
		try {
			const { data } = await axios("/auth/seller/register", {
				method: "POST",
				data: credentials,
			});
			if (data.message === "Registration successful") {
				toast.success(
					"Your account has been successfully created! Please login."
				);
				navigate("/signin");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={style}>
			<form onSubmit={(event) => registerSeller(event)}>
				<h2 className="h3 mb-3 fw-normal text-center">
					Create your Flora Account
				</h2>
				<div className="form-group mb-3">
					<label htmlFor="username">Username</label>
					<input
						type="text"
						name="userName"
						className="form-control py-1"
						id="username"
						value={credentials.username}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="email">Email address</label>
					<input
						type="email"
						name="email"
						className="form-control py-1"
						id="email"
						value={credentials.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					{" "}
					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						className="form-control"
						id="password"
						value={credentials.password}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					{" "}
					<label htmlFor="firstName">First name</label>
					<input
						type="text"
						name="firstName"
						className="form-control py-1"
						id="firstName"
						value={credentials.firstName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					{" "}
					<label htmlFor="lastName">Last name</label>
					<input
						type="text"
						name="lastName"
						className="form-control py-1"
						id="lastName"
						value={credentials.lastName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="storeName">Store Name</label>
					<input
						type="text"
						name="storeName"
						className="form-control py-1"
						id="storeName"
						value={credentials.storeName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label htmlFor="storeDescription">Store Description</label>
					<textarea
						className="form-control py-1"
						name="storeDescription"
						id="storeDescription"
						value={credentials.storeDescription}
						onChange={handleChange}
						required
					/>
				</div>
				<button className="w-100 btn btn-md btn-outline-primary">
					Create Account
				</button>
			</form>
		</div>
	);
}
