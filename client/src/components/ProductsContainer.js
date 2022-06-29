import React, { useContext, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/products-context";

export default function ProductsContainer() {
	let { products, searchQuery, getAllProducts, categoryId } = useContext(ProductsContext);

	console.log(products);

	useEffect(() => {
		getAllProducts();
		console.log(products);

	}, [searchQuery]);
	
	console.log(searchQuery)
	return (
	<div>	
		{products  
	    ?
        <div className="row row-cols-2 row-cols-xl-4 g-3">
			{/* map out product cards. map function should be different depending on where it's called */}
			{products.filter((product)=> product.productName.includes(searchQuery)).map((product) => {
				return <ProductCard key={product.productId} product={product} />;
			})}
		</div>
		:
		<p>Products loading...</p>
		}
		</div>
	);
}
