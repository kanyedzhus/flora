import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Layout";

export default function Canceled() {
	const navigate = useNavigate();
	return (
		<Layout>
			<div className="mx-auto text-center">
				<h1>Payment failed</h1>
				<p>Please try again.</p>
				<div>
					<button className="btn btn-primary" onClick={() => navigate("/")}>
						Continue Shopping
					</button>
				</div>
			</div>
		</Layout>
	);
}
