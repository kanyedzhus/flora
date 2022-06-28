import React, { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductsContext } from "../contexts/products-context";

export default function SearchProductsContainer({}) {
	let { products } = useContext(ProductsContext);
	
	if (!products) {
		products = [];
	}
    
   return(
		<div className="row row-cols-2 row-cols-xl-4 g-3">
			
			{products.map((product) => {
				return <ProductCard key={product.productId} product={product} />;
			})}
		</div>)
	;
        }

