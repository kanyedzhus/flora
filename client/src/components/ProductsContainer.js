import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";

export default function ProductsContainer() {
	// const { products } = useContext(ProductsContext);

	return (
		<div class="col-md-9">
			<div class="row row-cols-1 row-cols-sm-2 g-3">
				<ProductCard />
			</div>
		</div>
	);
}
