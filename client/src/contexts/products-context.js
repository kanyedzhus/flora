import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

// this will be the array of a shop's products stored in state
// const [products] = useState(["ShopProducts"]);
export default function ProductsContextProvider({ children }) {
	return (
		// value={{ products }} pass to ProductsContext.Provider
		<ProductsContext.Provider>{children}</ProductsContext.Provider>
	);
}
