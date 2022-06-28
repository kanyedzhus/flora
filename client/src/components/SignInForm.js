import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function SignInForm() {
	const style = {
		width: "100%",
		maxWidth: "330px",
		padding: "15px",
		margin: "auto",
	};

	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	//   const { username, password } = credentials;

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};

	const login = async (event) => {
		event.preventDefault();

		try {
			const { data } = await axios("/auth/users/login", {
				method: "POST",
				data: credentials,
			});

			if (data.message === "Login successful") {
				console.log("Login is succsessful");
				//store it locally
				localStorage.setItem("token", data.token);
				localStorage.setItem("user", JSON.stringify(data.user));
				console.log(data.message, data.token, data.user);
			}
		} catch (error) {
			console.log(error);
		}
	};

	//   const logout = () => {
	//     localStorage.removeItem("token");
	//   };

	const requestData = async () => {
		try {
			const { data } = await axios("/users/profile", {
				headers: {
					authorization: "Bearer " + localStorage.getItem("token"),
				},
			});

			console.log(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={style}>
			<form>
				<h2 className="h3 mb-3 fw-normal text-center">Please sign in</h2>

				<div className="form-group mb-3">
					<label htmlFor="email">Email address</label>
					<input
						value={credentials.email}
						name="email"
						onChange={handleChange}
						type="email"
						className="form-control py-1"
						id="email"
					/>
				</div>
				<div className="form-group mb-3">
					{" "}
					<label htmlFor="password">Password</label>
					<input
						value={credentials.password}
						name="password"
						onChange={handleChange}
						type="password"
						className="form-control"
						id="password"
					/>
				</div>

				<button
					className="w-100 btn btn-md btn-outline-primary"
					onClick={login}
				>
					Sign in
				</button>
			</form>

			<p className="mt-3">
				Not a member?{" "}
				<Link className="text-decoration-none" to="/register">
					{" "}
					Register{" "}
				</Link>
			</p>
			<p className="mt-3">
				Need a seller account?{" "}
				<Link className="text-decoration-none" to="/seller/register">
					{" "}
					Register here
				</Link>
			</p>
		</div>
	);
}
