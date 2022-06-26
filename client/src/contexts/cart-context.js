import React, { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../../src/helpers";
export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	// *ADD TO CART
	const addToCart = async (productId, price, stripePriceId) => {
		const newCartItem = {
			productId,
			price,
			stripePriceId,
			quantity: 1,
		};

		try {
			const addItem = await fetchFromAPI("cartitems/item", {
				body: newCartItem,
			});
			getCartItems();
		} catch (error) {
			console.log(error);
		}
	};

	// *INCREASE BY CARTITEM BY 1
	const increaseQty = async (cartItemId) => {
		console.log({ cartItemId });
		try {
			const response = await fetchFromAPI(`cartitems/item/${cartItemId}/edit`, {
				method: "PUT",
			});
			if (response.ok) {
				getCartItems();
			} else {
				console.log(response);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const [contextValues, setContextValues] = useState({
		addToCartFn: addToCart,
		increaseQtyFn: increaseQty,
		cartItems: [],
	});
	const getCartItems = async () => {
		try {
			const cartItems = await fetchFromAPI("cartitems/all-items", {
				method: "GET",
			});
			setContextValues({
				...contextValues,
				cartItems: [...cartItems],
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
