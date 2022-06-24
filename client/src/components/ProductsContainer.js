import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsContainer() {
	// const { products } = useContext(ProductsContext);

	return (
		<div className="col-md-9">
			<div className="row row-cols-1 row-cols-sm-2 g-3">
				{/* map out product cards */}
				<ProductCard />
			</div>
		</div>
	);
}
