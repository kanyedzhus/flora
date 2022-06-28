import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/cart-context";
import { fetchFromAPI } from "../helpers";
import StripeCheckout from "./Stripe/StripeCheckout";

export default function Total({
	cartItems,

	clearCartFn,
	cartTotal,
	buyer,
}) {
	console.log({ buyer });

	const items = cartItems.length === 1 ? "item" : "items";

	// const cartSessionId = cartSession.cartSessionId;
	// console.log({ cartSessionId });

	const createCartSession = async (cartTotal, buyerId) => {
		try {
			await fetchFromAPI("cartsessions/create-session", {
				body: { total: cartTotal, buyerId },
			});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {});
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
					// postCartSessionTotal={postCartSessionTotal}
					buyer={buyer}
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
