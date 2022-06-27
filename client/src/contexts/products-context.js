import React, { createContext, useState, useEffect } from "react";
import { fetchFromAPI } from "../helpers";

export const ProductsContext = createContext();
console.log(ProductsContext);
// this will be the array of a shop's products stored in state
// const [products] = useState(["ShopProducts"]);
export default function ProductsContextProvider({ children }) {
	const [contextValues, setContextValues] = useState();
	const getAllProducts = async () => {
		try {
			const products = await fetchFromAPI("products", {
				method: "GET",
			});

			setContextValues(products);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getAllProducts();
	}, []);
	console.log(contextValues);
	const value = {
		products: contextValues,
	};
	return (
		<ProductsContext.Provider value={value}>
			{children}
		</ProductsContext.Provider>
	);
}
