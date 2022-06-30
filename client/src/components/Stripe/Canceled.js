import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

export default function Canceled() {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="px-5 text-center">
				<h1 className="mt-5">Payment failed or was cancelled.</h1>
				<p>Please try again.</p>
				<div className="mb-5">
					<button
						className="btn btn-outline-success"
						onClick={() => navigate("/")}
					>
						Continue Shopping
					</button>
				</div>
			</div>
		</Layout>
	);
}
