import React from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<Layout>
			<p className="h1"> Oops, there's nothing to see here. </p>
			<button className="btn btn-primary" onClick={() => navigate("/")}>
				{" "}
				Continue Shopping
			</button>
		</Layout>
	);
}
