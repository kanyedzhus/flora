import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../contexts/cart-context";
import StripeCheckout from "./Stripe/StripeCheckout";

export default function Total({ cartItems, clearCartFn, updateTotalFn }) {
	const items = cartItems.length === 1 ? "item" : "items";
	const [cartTotal, setCartTotal] = useState(0);
	useEffect(() => {
		const total = cartItems.reduce((total, item) => {
			return total + item.price * item.quantity;
		}, 0);
		setCartTotal(total);
	}, [cartItems]);

	return (
		<div className="col-4 d-flex flex-column align-items-center ">
			<div className="p-3 text-center fw-semibold">
				<p>
					{cartItems.length} {items} in your cart
				</p>
				<h5 className="">{`Total: €${cartTotal}`}</h5>
			</div>
			<div className="d-flex gap-3">
				<StripeCheckout />
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
