import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
//import { ProductsContext } from "../contexts/products-context";

export default function SearchProductsContainer({productName}) {
	// let { products } = useState(ProductsContext);
	
	// if (!products) {
	// 	products = [];
	// }
    console.log(productName)
    if (productName !== undefined){
	return (
		<div className="row row-cols-2 row-cols-xl-4 g-3">
			
			{productName.map((product) => {
				return <ProductCard key={product.productId} product={product} />;
			})}
		</div>
	);} else{
        return null
    }
}
