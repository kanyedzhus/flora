import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<Layout>
			<div className="d-flex flex-column g-3 align-items-center my-5">
				<p className="h1"> Oops, there's nothing to see here. </p>
				<button
					className="btn btn-outline-success"
					onClick={() => navigate("/")}
				>
					{" "}
					Continue Shopping
				</button>
			</div>
		</Layout>
	);
}
