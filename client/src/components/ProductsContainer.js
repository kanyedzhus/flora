import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/products-context";

export default function ProductsContainer() {
	let { products, searchQuery, getAllProducts, categoryId } =
		useContext(ProductsContext);

//	console.log(products);

	useEffect(() => {
		getAllProducts();
		console.log(products);
	}, []);

	console.log(searchQuery);
	console.log(categoryId)
	return (
		<div className="col">
			{products ? (
				<div className="row row-cols-2 row-cols-xl-4 g-3">
					{/* map out product cards. map function should be different depending on where it's called */}
					{products.filter((product) => product.categoryId.includes(categoryId)).map((product) => {
							return <ProductCard key={product.productId} product={product} />;
						//.filter((product) => product.productName.includes(searchQuery))
						
					})}
					
				</div>
			) : (
				<p>Products loading...</p>
			)}
		</div>
	);
}
