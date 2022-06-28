import React, { createContext, useEffect, useState } from "react";
import { fetchFromAPI } from "../../src/helpers";
import { toast } from "react-toastify";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
	useEffect(() => {
		getCartItems();
		getCartSession();
	}, []);

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
			console.log(addItem);
			getCartItems();
		} catch (error) {
			console.log(error);
		}
	};

	// *INCREASE CARTITEM BY 1
	const increaseQty = async (cartItemId, quantity) => {
		console.log({ cartItemId });
		const increasedQty = quantity + 1;
		try {
			const response = await fetchFromAPI(`cartitems/item/${cartItemId}/edit`, {
				method: "PUT",
				body: { quantity: increasedQty },
			});
			console.log(quantity);

			console.log({ response });

			getCartItems();
		} catch (error) {
			console.log(error);
		}
	};

	// *DECREASE  CARTITEM BY 1
	const decreaseQty = async (cartItemId, quantity) => {
		const decreasedQty = quantity - 1;
		if (quantity === 1) {
			toast.info("Press the Trash Icon to remove this item from your cart.");
			return;
		}
		try {
			const response = await fetchFromAPI(`cartitems/item/${cartItemId}/edit`, {
				method: "PUT",
				body: { quantity: decreasedQty },
			});

			getCartItems();
		} catch (error) {
			console.log(error);
		}
	};

	// *REMOVE ITEM FROM CART
	const removeFromCart = async (cartItemId) => {
		try {
			const response = await fetchFromAPI(
				`cartitems/item/${cartItemId}/delete`,
				{ method: "DELETE" }
			);
			getCartItems();
		} catch (error) {
			console.log(error);
		}
	};

	// *CLEAR ENTIRE CART
	const clearCart = async () => {
		try {
			const response = await fetchFromAPI("cartitems/delete-all", {
				method: "DELETE",
			});
			getCartItems();
		} catch (error) {
			console.log(error);
		}
	};

	const getCartItems = async () => {
		try {
			const cartItems = await fetchFromAPI("cartitems/all-items", {
				method: "GET",
			});
			// setContextValues({
			// 	...contextValues,
			// 	cartItems: [...cartItems],
			// });
			setContextValues((oldState) => ({ ...oldState, cartItems: cartItems }));
		} catch (error) {
			console.log(error);
		}
	};

	const getCartSession = async () => {
		try {
			const cartSession = await fetchFromAPI("cartsessions", {
				method: "GET",
			});
			console.log(cartSession);
			const cartSessionObj = cartSession[0];
			// setContextValues({
			// 	...contextValues,
			// 	cartSession: { ...cartSessionObj },
			// });

			setContextValues((oldState) => ({
				...oldState,
				cartSession: cartSessionObj,
			}));
		} catch (error) {
			console.log(error);
		}
	};
	const [contextValues, setContextValues] = useState({
		addToCartFn: addToCart,
		increaseQtyFn: increaseQty,
		decreaseQtyFn: decreaseQty,
		removeFromCartFn: removeFromCart,
		clearCartFn: clearCart,
		cartSession: {},
		cartItems: [],
	});
	console.log(contextValues);

	return (
		<CartContext.Provider value={contextValues}>
			{children}
		</CartContext.Provider>
	);
}
