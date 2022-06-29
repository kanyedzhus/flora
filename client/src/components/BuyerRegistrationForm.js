import React, { useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function BuyerRegistrationForm() {
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
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const registerBuyer = async (event) => {
		event.preventDefault();
		try {
			const { data } = await axios("/auth/buyer/register", {
				method: "POST",
				data: credentials,
			});
			console.log({ data });
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
			<form>
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
				<button
					className="w-100 btn btn-md btn-outline-primary"
					onClick={registerBuyer}
				>
					Create Account
				</button>
			</form>
		</div>
	);
}
