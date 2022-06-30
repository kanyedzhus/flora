import React from "react";
import ProductsContainer from "./ProductsContainer";
export default function Featured() {
	return (
		<div className="container mb-3">
			<h1 className="text-center">Popular Plants</h1>
			<ProductsContainer />
		</div>
	);
}
