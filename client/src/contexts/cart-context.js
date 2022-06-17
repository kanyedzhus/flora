import React, { createContext } from "react";

export const CartContext = createContext();

// these values will be the state of the cart and any functions we need to perform on cartitems.
const contextValues = {};
export default function CartContextProvider({ children }) {
	return (
		<CartContext.Provider value={contextValues}>
			{children}
		</CartContext.Provider>
	);
}
