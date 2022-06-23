import React from "react";

export default function SellerRegistrationForm() {
	const style = {
		width: "100%",
		maxWidth: "330px",
		padding: "15px",
		margin: "auto",
	};

	return (
		<div style={style}>
			<form>
				<h2 className="h3 mb-3 fw-normal text-center">
					Create your Flora Account
				</h2>
				<div className="form-group mb-3">
					<label for="username">Username</label>
					<input type="text" className="form-control py-1" id="username" />
				</div>
				<div className="form-group mb-3">
					<label for="email">Email address</label>
					<input type="email" className="form-control py-1" id="email" />
				</div>
				<div className="form-group mb-3">
					{" "}
					<label for="password">Password</label>
					<input type="password" className="form-control" id="password" />
				</div>
				<div className="form-group mb-3">
					<label for="storeName">Store Name</label>
					<input type="text" className="form-control py-1" id="storeName" />
				</div>
				<div className="form-group mb-3">
					<label for="storeDescription">Store Description</label>
					<textarea className="form-control py-1" id="storeDescription" />
				</div>
				<button className="w-100 btn btn-md btn-outline-primary" type="submit">
					Create Account
				</button>
			</form>
		</div>
	);
}
