import React, { createContext, useState, useEffect } from "react";
import { fetchFromAPI } from "../helpers";

export const ProductsContext = createContext();
console.log(ProductsContext);
// this will be the array of a shop's products stored in state
// const [products] = useState(["ShopProducts"]);
export default function ProductsContextProvider({ children }) {
const [contextValues, setContextValues] = useState();
const [searchQuery, setSearchQuery] = useState("")
const [categoryID, setCategoryID] = useState("")
	const getAllProducts = async () => {
		try {
			const products = await fetchFromAPI("products", {
				method: "GET",
			});

			setContextValues((oldState) => ({
				...oldState,
				products: value,
			}));;
			console.log("products fetched")
			console.log(products)
		} catch (error) {
			console.log(error);
		}
	};
	// const getAllProducts =() =>{
	// 	 fetch(`/products`)
	// 	 .then(res => res.json())
	// 	 .then( response => {
	// 	    setContextValues(response);
	// 	})
	// 	.catch(e => console.log(e));
	// 	 }

	useEffect(() => {
		getAllProducts();
	}, []);
	console.log(contextValues);

	
	const changeSearchQuery =(product) =>{
		console.log("function")
		console.log(product)
		setSearchQuery(product )}

	const value = {
		products: contextValues, 
       searchQuery: searchQuery,
	   changeSearchQuery: changeSearchQuery,
	};
	
	

	return (
		<ProductsContext.Provider value={value} >
			{children}
		</ProductsContext.Provider>
	);
}
