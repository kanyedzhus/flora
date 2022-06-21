import React from "react";
import { Link } from "react-router-dom";

export default function SignInForm() {
	const style = {
		width: "100%",
		maxWidth: "330px",
		padding: "15px",
		margin: "auto",
	};
	return (
		<div style={style}>
			<form>
				<h2 className="h3 mb-3 fw-normal text-center">Please sign in</h2>

				<div className="form-group mb-3">
					<label for="email">Email address</label>
					<input type="email" className="form-control py-1" id="email" />
				</div>
				<div className="form-group mb-3">
					{" "}
					<label for="password">Password</label>
					<input type="password" className="form-control" id="password" />
				</div>

				<button className="w-100 btn btn-md btn-outline-primary" type="submit">
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
		</div>
	);
}
