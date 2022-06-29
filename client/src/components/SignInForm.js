import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { fetchFromAPI } from "../helpers";
import { CartContext } from "../contexts/cart-context";

export default function SignInForm({ user, buyer, getBuyer }) {
	const style = {
		width: "100%",
		maxWidth: "330px",
		padding: "15px",
		margin: "auto",
	};
	const { cartTotal } = useContext(CartContext);
	const [credentials, setCredentials] = useState({
		email: "",
		password: "",
	});

	//   const { username, password } = credentials;
	// const getUserFromLocalStorage = () => {
	// 	const user = localStorage.getItem("user")
	// 		? JSON.parse(localStorage.getItem("user"))
	// 		: {};

	// 	setUser(user);
	// 	console.log({ user });
	// 	if (user) {
	// 		getBuyer(user.userId);
	// 	}
	// };

	// const getBuyer = async (userId) => {
	// 	try {
	// 		const buyer = await fetchFromAPI(`users/buyer/${userId}`, {
	// 			method: "GET",
	// 		});
	// 		setBuyer(buyer);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

	const handleChange = (e) => {
		const { name, value } = e.target;
		setCredentials({ ...credentials, [name]: value });
	};
	// const getBuyer = async (userId) => {
	// 	try {
	// 		const buyer = await fetchFromAPI(`users/buyer/${userId}`, {
	// 			method: "GET",
	// 		});
	// 		setBuyer(buyer);
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };
	const createCartSession = async (buyerId) => {
		try {
			await fetchFromAPI("cartsessions/create-session", {
				method: "POST",
				body: {
					total: cartTotal,
					buyerId,
				},
			});
		} catch (error) {}
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
				const user = JSON.parse(localStorage.getItem("user"));
				getBuyer(user.userId);
				console.log(buyer.buyerId);
				createCartSession(buyer.buyerId);
				console.log(data.message, data.token, data.user);

				// on successful login navigate to profile
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
