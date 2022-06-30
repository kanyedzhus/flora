import React from "react";
import ProductsContainer from "./ProductsContainer";
export default function Featured() {
	return (
		<div className="container mb-3">
			<h1 className="text-center mb-3">New Arrivals</h1>
			<ProductsContainer />
		</div>
	);
}
