import React, { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../../src/helpers";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	const addToCart = async (
		productId,

		price,
		quantity,
		,
		stripePriceId
	) => {
		const newCartItem = {
			productId,
			productName,
			price,
			quantity,
			sellerId,
			stripePriceId,
		};

		const addItem = await fetchFromAPI("cartitems/item", { body: newCartItem });
	};

	const [contextValues, setContextValues] = useState({
		addToCart,
		cartItems: [],
	});
	const getCartItems = async () => {
		try {
			const cartItems = await fetchFromAPI("cartitems/all-items", {
				method: "GET",
			});
			setContextValues({
				...contextValues,
				cartItems: [...cartItems, cartItem],
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getCartItems();
	}, []);

	return (
		<CartContext.Provider value={contextValues}>
			{children}
		</CartContext.Provider>
	);
}
