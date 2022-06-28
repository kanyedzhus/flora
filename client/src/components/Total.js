import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/cart-context";
import { fetchFromAPI } from "../helpers";
import StripeCheckout from "./Stripe/StripeCheckout";

export default function Total({
	cartItems,
	cartSession,
	clearCartFn,
	cartTotal,
}) {
	const items = cartItems.length === 1 ? "item" : "items";

	console.log({ cartSession });

	const cartSessionId = cartSession.cartSessionId;
	console.log({ cartSessionId });

	const postCartSessionTotal = async (cartTotal) => {
		try {
			await fetchFromAPI(`cartsessions/total/${cartSessionId}/edit`, {
				method: "PUT",
				body: { total: cartTotal },
			});
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<div className="col-4 d-flex flex-column align-items-center ">
			<div className="p-3 text-center fw-semibold">
				<p>
					{cartItems.length} {items} in your cart
				</p>
				<h5 className="">{`Total: €${cartTotal.toFixed(2)}`}</h5>
			</div>
			<div className="d-flex gap-3">
				<StripeCheckout
					cartTotal={cartTotal}
					postCartSessionTotal={postCartSessionTotal}
				/>
				<button
					className="btn btn-outline"
					onClick={() => {
						clearCartFn();
					}}
				>
					CLEAR
				</button>
			</div>
		</div>
	);
}
