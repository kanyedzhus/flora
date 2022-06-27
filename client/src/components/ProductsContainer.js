import React, { useContext } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/products-context";

export default function ProductsContainer() {
	let { products } = useContext(ProductsContext);
	console.log(products);
	if (!products) {
		products = [];
	}
	return (
		<div className="row row-cols-2 row-cols-xl-4 g-3">
			{/* map out product cards. map function should be different depending on where it's called */}
			{products.map((product) => {
				return <ProductCard key={product.productId} product={product} />;
			})}
		</div>
	);
}
